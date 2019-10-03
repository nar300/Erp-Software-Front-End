import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from '../Models/Department';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { 

  }

  getDepartment(){
    return this.http.get<Department[]>(environment.ServerUrl+'Departments')
  }
}
