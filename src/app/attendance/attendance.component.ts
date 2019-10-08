import { Component, OnInit } from '@angular/core';
import { AttendaceService } from '../attendace.service';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { Employee } from '../Models/Employee';
import { Attendance } from '../Models/Attendace';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  empList:Employee[]=[];
  atList:Attendance[]=[];

  constructor(private service:AttendaceService,
    private fb:FormBuilder,
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
    description:[''],
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
  })
}


}
