import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { DataTablesModule } from 'angular-datatables';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { DepartmentComponent } from './department/department.component';
import { DesignationComponent } from './designation/designation.component';
import { DepartmentformComponent } from './departmentform/departmentform.component';
import { DeignationComponent } from './deignation/deignation.component';
import { DesignationformComponent } from './designationform/designationform.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';
import { UpdatedesignationComponent } from './updatedesignation/updatedesignation.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { SalaryComponent } from './salary/salary.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChartsModule } from 'ng2-charts';
import { FullCalendarModule } from '@fullcalendar/angular'; 


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeFormComponent,
    DepartmentComponent,
    DesignationComponent,
    DepartmentformComponent,
    DeignationComponent,
    DesignationformComponent,
    UpdateDepartmentComponent,
    UpdatedesignationComponent,
    UpdateemployeeComponent,
    AttendanceComponent,
    SalaryComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    ChartsModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
