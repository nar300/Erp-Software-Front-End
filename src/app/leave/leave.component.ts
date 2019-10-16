import { Component, OnInit,ViewChild } from '@angular/core';
import { LeaveService } from '../leave.service';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { Employee } from '../Models/Employee';
import { NotificationService } from '../notification.service';
import { EventInput } from '@fullcalendar/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {

  empList:Employee[]=[];
  eventList:EventInput[]=[];

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin];
  calendarWeekends = true;

  constructor(private leaveservice:LeaveService,private fb:FormBuilder,
    private empservice: CommonService<Employee>,
    private toastr: NotificationService,) { }

  ngOnInit() {
    this.empservice.getAll().subscribe(res=>{
      console.log(res)
      this.empList=res;
    })
  }

  leaveform = this.fb.group({

    leaveType:['',Validators.required],
    leaveFromDate:['',Validators.required],
    leaveToDate:['',Validators.required],
    description:['',Validators.required],
    employeeId:['',Validators.required]

  })

  get leavetype(){
    return this.leaveform.get('leaveType')
  }

  get leavefromdt(){
    return this.leaveform.get('leaveFromDate')
  }

  get leavetodt(){
    return this.leaveform.get('leaveToDate')
  }

  get desc(){
    return this.leaveform.get('description')
  }
  get empId(){
    return this.leaveform.get('employeeId')
  }

  onSubmit(){
    this.leaveservice.createleave(this.leaveform.value).subscribe(res=>{
      console.log(res);
      this.toastr.showSuccess('successfully added','notification')
      this.leaveform.reset()
    })
  }

  onChange(value){
    console.log(value)
    this.empservice.getById(value).subscribe(res=>{
      console.log(res)
      this.eventList =[];
     for (let i = 0; i < res.leaves.length; i++) {
       const element = res.leaves[i];
       let evt = {
         title :element["description"],
         start:element['leaveFromDate']
       }
       
       this.eventList.push(evt)
       console.log(this.eventList)
     }
    })
  }
}
