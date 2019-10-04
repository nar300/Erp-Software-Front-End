import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../services/department.service';
import { Department } from '../Models/Department';
import { Subject } from 'rxjs';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  dptList:Department[]=[];
  dtTrigger: Subject<Department> = new Subject();

  constructor(private  deptService:DepartmentService) { }

  dtOptions: DataTables.Settings = {};

  ngOnInit() {
    this.getallDpt();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
  }

  getallDpt(){
    this.deptService.getDepartment().subscribe(res=>{
      console.log(res)
      this.dptList = res;
      this.dtTrigger.next();
    },
    err=>console.log(err))
  }

  dptDelete(id){
    this.deptService.deleteDepartment(id).subscribe(res=>{
      console.log(res);
      this.dptList = this.dptList.filter(item => item.id !==id)
    },
    err=>console.log(err));

  }



  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
