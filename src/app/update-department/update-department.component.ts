import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DepartmentService } from '../services/department.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent implements OnInit {

  id=0;
  dptName='';


  constructor(private fb:FormBuilder ,private dptService:DepartmentService,
    
    private router:Router,private route:ActivatedRoute
     ) { }
 
  ngOnInit() {
    this.route.params.subscribe(res=>{
      console.log(res);
      this.id = res['id']
      this.getbyId(this.id);
      
    })
    
  }

  
  dptRegister = this.fb.group({
     
    departmentName:['',Validators.required]
  })

  get Dpt(){
    return this.dptRegister.get('departmentName')
  }

  onSubmit(){
    let body ={...this.dptRegister.value,id:this.id}
    this.dptService.updateDepartment(this.id,body).subscribe(res=>{
      console.log(res);

      this.router.navigate(['department'])
    },
    err=>console.log(err))

  }

  getbyId(id){
    this.dptService.getDptById(id).subscribe(res=>{
      console.log(res);
     
     this.Dpt.setValue(res.departmentName)

    })

  }


}
