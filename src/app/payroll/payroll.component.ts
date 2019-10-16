import { Component, OnInit } from '@angular/core';
import { PayrollService } from '../payroll.service';
import { Payroll } from '../Models/Payroll';
import { Employee } from '../Models/Employee';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent implements OnInit {

  payList:Payroll[]=[];
  empList:Employee[]=[];
  emp:Employee;

  constructor(private payrolservice:PayrollService,
     private empService:CommonService<Employee>,
     ) { }

  ngOnInit() {
    this.empService.getAll().subscribe(res=>{
      console.log(res);
      this.empList =res
    })

    
  }



  onClick(empid){
    console.log(empid)
    this.empService.getById(empid).subscribe(res=>{
      console.log(res.payRolls)
      // this.payList=res.payRolls
      this.emp = res;
      for (let i = 0; i < res.payRolls.length; i++) {
        const element = res.payRolls[i];
        this.payrolservice.getPayroll(element.id).subscribe(res=>{
          console.log(res)
          this.payList.push(res)
        })
      }
    })

  }

}
