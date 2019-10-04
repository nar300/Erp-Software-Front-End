import { Component, OnInit } from '@angular/core';
import { DesignatonService } from '../services/designaton.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-updatedesignation',
  templateUrl: './updatedesignation.component.html',
  styleUrls: ['./updatedesignation.component.css']
})
export class UpdatedesignationComponent implements OnInit {

  id = 0;


  constructor(private dsgService: DesignatonService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      console.log(res)
      this.id = res['id']
      this.getById(this.id);
    })

  }

  dsgUpdate = this.fb.group({

    jobTitle: ['', Validators.required],
    division: ['', Validators.required]
  })


  get jbt() {
    return this.dsgUpdate.get('jobTitle')
  }

  get dv() {
    return this.dsgUpdate.get('division')
  }

  getById(id) {
    this.dsgService.getDesignationById(id).subscribe(res => {
      console.log(res)
      this.jbt.setValue(res.jobTitle);
      this.dv.setValue(res.division);

    }, err => console.log(err))
  }

  onSubmit() {
    let body ={...this.dsgUpdate.value,id:this.id}

    this.dsgService.updateDesignation(this.id,body).subscribe(res=>{
      console.log(res)
      this.router.navigate(['designation'])
    },err=>console.log(err))
  }

  


}
