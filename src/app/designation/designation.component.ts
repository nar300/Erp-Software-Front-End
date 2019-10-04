import { Component, OnInit } from '@angular/core';
import { Designation } from '../Models/Designation';
import { DesignatonService } from '../services/designaton.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {
  
  dsgList:Designation[]=[];

  constructor(private dsgservice:DesignatonService) { }

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<Designation> = new Subject();

  ngOnInit() {
    this.getallDesignation();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
  }

  getallDesignation(){
    this.dsgservice.getallDsg().subscribe(res=>{
      console.log(res);
      this.dsgList =res;
      this.dtTrigger.next();
    },
    err=>console.log(err))
  }

  dsgDelete(id){
    this.dsgservice.deleteDesignation(id).subscribe(res=>{
      console.log(res);
      this.dsgList = this.dsgList.filter(item=>item.id !=id)

    })

  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
