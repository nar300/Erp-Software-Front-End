import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Employee } from '../Models/Employee';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  EmpList:Employee[]=[];
  dtTrigger: Subject<Employee> = new Subject();

  
  constructor(private service:CommonService<Employee>) { }
  dtOptions: DataTables.Settings = {};
  ngOnInit() {
    this.Getrecords();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

  }

  Getrecords(){
    this.service.getAll().subscribe(res=>{
      console.log(res);
      this.EmpList=res;
      this.dtTrigger.next();

    },
    error=>console.log(error)
    
    )
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
