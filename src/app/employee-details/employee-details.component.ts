import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Employee } from '../Models/Employee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

 Id=0;
 EmpDetail:Employee = new Employee();
  constructor(private service:CommonService<Employee>,
    private route:ActivatedRoute) { }

  ngOnInit() {
    
    this.route.params.subscribe(res=>{
      console.log(res)
     this.Id = res['id']
     this.getbyId(this.Id)
    })
  }

  getbyId(id){
    this.service.getById(id).subscribe(res=>{
      console.log(res)
      this.EmpDetail=res;
    },
    err=>console.log(err))

  }
}
