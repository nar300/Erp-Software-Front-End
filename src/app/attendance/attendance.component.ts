import { Component, OnInit, ViewChild } from '@angular/core';
import { AttendaceService } from '../attendace.service';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { Employee } from '../Models/Employee';
import { Attendance } from '../Models/Attendace';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventInput } from '@fullcalendar/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from '../notification.service';


@Component({
  // providers:[ { provide: ToastrService, useClass: NotificationService}],
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']

})

export class AttendanceComponent implements OnInit {

  empList:Employee[]=[];
  atList:Attendance[]=[];
  eventList:EventInput[]=[];

  // @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin];
  calendarWeekends = true;

  

  constructor(private service:AttendaceService,
    private fb:FormBuilder,private toastr: NotificationService,
    private empService:CommonService<Employee>
    ) { }

  ngOnInit() {
    this.empService.getAll().subscribe(res=>{
      console.log(res)
      this.empList =res;
    })
  }

  registerAttendance = this.fb.group({
  
    
    type:['',Validators.required],
    description:['',Validators.required],
    date:['',Validators.required],
    employeeId:['',Validators.required],

  })
  
get atType(){
  return this.registerAttendance.get('type')
}

get desc(){
  return this.registerAttendance.get('description')
}

get dt(){
  return this.registerAttendance.get('date')
}

get empId(){
  return this.registerAttendance.get('employeeId')
}

getAll(){
  this.service.getAllAttendance().subscribe(res=>{
    console.log(res)
    this.atList = res;
  })
}

onSubmit(){
  this.service.createAttendance(this.registerAttendance.value).subscribe(res=>{
    console.log(res);
    this.toastr.showSuccess('successfully added','notification')
    this.registerAttendance.reset()
  })
}

onChange(value){
  console.log(value)
  this.empService.getById(value).subscribe(res=>{
    console.log(res)
    this.eventList =[];
   for (let i = 0; i < res.attendances.length; i++) {
     const element = res.attendances[i];
     let evt = {
       title :element["description"],
       start:element['date']
     }
     
     this.eventList.push(evt)
     console.log(this.eventList)
   }
  })
}



}


export interface Event{
  title:string;
  date:string;
}
