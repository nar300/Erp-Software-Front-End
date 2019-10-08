import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { Employee } from '../Models/Employee';
import { SalaryService } from '../salary.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {

  empList:Employee[]=[];

  constructor(private fb:FormBuilder,
    private empService:CommonService<Employee>,
    private salaryService:SalaryService
    
    ) { }

  ngOnInit() {
    this.empService.getAll().subscribe(res=>{
      console.log(res)
     this.empList=res
    })
  }


  salaryform = this.fb.group({

    
    employeeId:[0],
    rate:['',Validators.required],
    rateType:['',Validators.required],
    payType:['',Validators.required],
    description:['']

  })

  get rt(){
    return this.salaryform.get('rate')
  }

  get rtType(){
    return this.salaryform.get('rateType')
  }
  get pt(){
    return this.salaryform.get('payType')
  }
  get desc(){
    return this.salaryform.get('description')
  }
  get empId(){
    return this.salaryform.get('employeeId')
  }


  onSubmit(){
    console.log(this.salaryform.value)

    this.salaryService.createSalary(this.salaryform.value).subscribe(res=>{
     console.log(res)
    })
  }

}
