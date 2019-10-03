import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DepartmentService } from '../services/department.service';
import { Department } from '../Models/Department';
import { DesignatonService } from '../services/designaton.service';
import { Designation } from '../Models/Designation';
import { CommonService } from '../services/common.service';
import { Employee } from '../Models/Employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

dptList:Department[]=[];
dsgList:Designation[]=[];

  constructor(private fb:FormBuilder,
    
    private dptservice:DepartmentService,
    private dsgService:DesignatonService,
    private empService:CommonService<Employee>,
    private route:Router

    ) { }

  
  ngOnInit() {

    this.dptservice.getDepartment().subscribe(res=>{
      console.log(res)
      this.dptList=res;
    })

    this.dsgService.getallDsg().subscribe(res=>{
      console.log(res);
      this.dsgList =res
    })

  }

  employeeform = this.fb.group({

    firstName : ['',[Validators.required,Validators.minLength(2)]],
    lastName:['',[Validators.required,Validators.minLength(2)]],
    phoneNumber:[0,[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    niNumber:['',[Validators.required,Validators.maxLength(12)]],
    gender:['',[Validators.required]],
    dateofBirth:['',Validators.required],
    maritalStatus:['Married',Validators.required],
    employeeType:['Permanant',Validators.required],
    dateofJoin:['',Validators.required],
    education:['',Validators.required],
    experience:['',Validators.required],
    departmentId:['',Validators.required],
    designationId:['',Validators.required],
    homeAddress:['',Validators.required],
    city:['',Validators.required],
    town:['',Validators.required],
    postCode:['',Validators.required]


  })

  get fName(){
    return this.employeeform.get('firstName')
  }

  get lName(){
    return this.employeeform.get('lastName')
  }
  get fNumber(){
    return this.employeeform.get('phoneNumber')
  }

  get mail(){
    return this.employeeform.get('email')

  }

  get ni(){
    return this.employeeform.get('niNumber')
  }

  get gend(){

    return this.employeeform.get('gender')
  }

get  dob(){
  return this.employeeform.get('dateofBirth')
}
get mstatus (){
  return this.employeeform.get('maritalStatus')
}

get emptype(){
  return this.employeeform.get('employeeType')
}

get dfj(){
  return this.employeeform.get('dateofJoin')
}
get edu(){
  return this.employeeform.get('education')
}
get exp(){
  return this.employeeform.get('experience')
}
get desg(){
  return this.employeeform.get('designationId')
}
get dpt(){
  return this.employeeform.get('departmentId')
}
get Address(){
  return this.employeeform.get('homeAddress')
}
get ct(){
  return this.employeeform.get('city')
}
get tow(){
  return this.employeeform.get('town')
}
get zip(){
  return this.employeeform.get('postCode')
}





onSubmit(){
  if(this.employeeform.valid){
    console.log(this.employeeform.value)
    let body = {...this.employeeform.value,status:"active",modeofRecruitment:"interview"}
    this.empService.createEmployee(body).subscribe(res=>{
     this.route.navigate(['employee'])
    },
    err=>console.log(err))
    
  }

}


}
