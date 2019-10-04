import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { DepartmentComponent } from './department/department.component';
import { DesignationComponent } from './designation/designation.component';
import { DepartmentformComponent } from './departmentform/departmentform.component';
import { DesignationformComponent } from './designationform/designationform.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';


const routes: Routes = [
  {path:"",component:DashboardComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'employee/:id',component:EmployeeDetailsComponent},
  {path:'employeeform',component:EmployeeFormComponent},
  {path:'department',component:DepartmentComponent},
  {path:'department',component:DepartmentComponent},
  {path:'updatedepartment/:id',component:UpdateDepartmentComponent},
  {path:'departmentform',component:DepartmentformComponent},
 
  {path:'designationform',component:DesignationformComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
