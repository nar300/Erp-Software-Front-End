import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DesignatonService } from '../services/designaton.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-designationform',
  templateUrl: './designationform.component.html',
  styleUrls: ['./designationform.component.css']
})
export class DesignationformComponent implements OnInit {

  constructor(private fb:FormBuilder , private dsgService:DesignatonService,
    private route:Router) { }

  ngOnInit() {
  }

  dsgRegister = this.fb.group({
    jobTitle :['',Validators.required],
    division:['',Validators.required]
  })

get jbt(){

  return this.dsgRegister.get('jobTitle')
}
 
get dv(){
  return this.dsgRegister.get('division')
}

onSubmit(){
  this.dsgService.cerateDesignation(this.dsgRegister.value).subscribe(res=>{
    console.log(res);

    this.route.navigate(['designation'])

  })
}

}
