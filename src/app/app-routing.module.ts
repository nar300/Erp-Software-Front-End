import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { DepartmentComponent } from './department/department.component';
import { DesignationComponent } from './designation/designation.component';
import { DepartmentformComponent } from './departmentform/departmentform.component';


const routes: Routes = [
  {path:"",component:DashboardComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'employee/:id',component:EmployeeDetailsComponent},
  {path:'employeeform',component:EmployeeFormComponent},
  {path:'department',component:DepartmentComponent},
  {path:'designation',component:DesignationComponent},
  {path:'departmentform',component:DepartmentformComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
