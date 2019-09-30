import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Employee } from '../Models/Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  EmpList:Employee[]=[];

  constructor(private service:CommonService) { }

  ngOnInit() {
    this.Getrecords();
  }

  Getrecords(){
    this.service.getAll().subscribe(res=>{
      console.log(res);
      this.EmpList=res;
      

    },
    error=>console.log(error)
    
    )
  }
}
