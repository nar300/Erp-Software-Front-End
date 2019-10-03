import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';


const routes: Routes = [
  {path:"",component:DashboardComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'employee/:id',component:EmployeeDetailsComponent},
  
  {path:'employeeform',component:EmployeeFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
