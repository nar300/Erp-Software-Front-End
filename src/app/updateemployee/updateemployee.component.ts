
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DepartmentService } from '../services/department.service';
import { Department } from '../Models/Department';
import { DesignatonService } from '../services/designaton.service';
import { Designation } from '../Models/Designation';
import { CommonService } from '../services/common.service';
import { Employee } from '../Models/Employee';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit  {

  id=0;
  
dptList:Department[]=[];
dsgList:Designation[]=[];
empList:Employee[]=[];

  constructor(private fb:FormBuilder,
    
    private dptservice:DepartmentService,
    private dsgService:DesignatonService,
    private empService:CommonService<Employee>,
    private router:Router,
    private route:ActivatedRoute

    ) { }

  
  ngOnInit() {

    this.route.params.subscribe(res => {
      console.log(res)
      this.id = res['id']
      this.getById(this.id);
    })
    

    this.dptservice.getDepartment().subscribe(res=>{
      console.log(res)
      this.dptList=res;
    })

    this.dsgService.getallDsg().subscribe(res=>{
      console.log(res);
      this.dsgList =res
    })

    this.empService.getAll().subscribe(res=>{
      this.empList=res
    })
  }

  employeeupdateform = this.fb.group({

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
    return this.employeeupdateform.get('firstName')
  }

  get lName(){
    return this.employeeupdateform.get('lastName')
  }
  get fNumber(){
    return this.employeeupdateform.get('phoneNumber')
  }

  get mail(){
    return this.employeeupdateform.get('email')

  }

  get ni(){
    return this.employeeupdateform.get('niNumber')
  }

  get gend(){

    return this.employeeupdateform.get('gender')
  }

get  dob(){
  return this.employeeupdateform.get('dateofBirth')
}
get mstatus (){
  return this.employeeupdateform.get('maritalStatus')
}

get emptype(){
  return this.employeeupdateform.get('employeeType')
}

get dfj(){
  return this.employeeupdateform.get('dateofJoin')
}
get edu(){
  return this.employeeupdateform.get('education')
}
get exp(){
  return this.employeeupdateform.get('experience')
}
get desg(){
  return this.employeeupdateform.get('designationId')
}
get dpt(){
  return this.employeeupdateform.get('departmentId')
}
get Address(){
  return this.employeeupdateform.get('homeAddress')
}
get ct(){
  return this.employeeupdateform.get('city')
}
get tow(){
  return this.employeeupdateform.get('town')
}
get zip(){
  return this.employeeupdateform.get('postCode')
}


getById(id){
  this.empService.getById(id).subscribe(res=>{
    console.log(res)
    this.fName.setValue(res.firstName);
    this.lName.setValue(res.lastName);
    this.fNumber.setValue(res.phoneNumber)
    this.mail.setValue(res.email);
    this.ni.setValue(res.niNumber);
    this.gend.setValue(res.gender);
    this.dob.setValue(res.dateofBirth);
    this.mstatus.setValue(res.maritalStatus);
    this.emptype.setValue(res.employeeType);
    this.dfj.setValue(res.dateofJoin);
    this.edu.setValue(res.education);
    this.exp.setValue(res.experience);
  this.dpt.setValue(res.departmentId);
  this.desg.setValue(res.designationId);

    this.Address.setValue(res.homeAddress);
    this.ct.setValue(res.city);
    this.tow.setValue(res.town);
    this.zip.setValue(res.postCode);
    
  })
}



onSubmit(){
 
   console.log(this.employeeupdateform.value);

   let body = {...this.employeeupdateform.value,id:this.id,status:"active",modeofRecruitment:"interview"}

   this.empService.empUpdate(this.id,body).subscribe(res=>{
     console.log(res)
     this.router.navigate(['employee'])
   })
  

}


}
