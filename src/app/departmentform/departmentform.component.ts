import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DepartmentService } from '../services/department.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-departmentform',
  templateUrl: './departmentform.component.html',
  styleUrls: ['./departmentform.component.css']
})
export class DepartmentformComponent implements OnInit {

  

  constructor(private fb:FormBuilder ,private dptService:DepartmentService,
    
   private router:Router
    ) { }

  ngOnInit() {
  }

  dptRegister = this.fb.group({
     
    departmentName:['',Validators.required]
  })

  get Dpt(){
    return this.dptRegister.get('departmentName')
  }

  onSubmit(){
    this.dptService.createDepartment(this.dptRegister.value).subscribe(res=>{
      console.log(res);
      this.router.navigate(['department'])
    },
    err=>console.log(err))

  }
}
