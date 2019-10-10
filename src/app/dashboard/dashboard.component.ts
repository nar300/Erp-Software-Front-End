import { Component, OnInit,ViewChild } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Employee } from '../Models/Employee';
import { AttendaceService } from '../attendace.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  empCount:number;
  attendanceCount:number;



  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions ) = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: '#00ACED',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

 


  constructor(private empService:CommonService<Employee> ,
    private attendanceService:AttendaceService,
   
    
    ) {

      
   
     }





  ngOnInit() {

    this.attendanceService.getAllAttendance().subscribe(res=>{
      this.attendanceCount =res.length;

    })

    this.empService.getAll().subscribe(res=>{

      console.log(res)
      this.empCount = res.length;

    })
  }

  
}
