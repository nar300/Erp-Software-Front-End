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
getDptById(id){
  return this.http.get<Department>(environment.ServerUrl+'Departments/'+id)

}

  deleteDepartment(id){
    return this.http.delete(environment.ServerUrl+'Departments/'+id)

  }
  createDepartment(body){
    return this.http.post<Department>(environment.ServerUrl+'Departments',body)

  }

  updateDepartment(id,body){
    return this.http.put(environment.ServerUrl+'Departments/'+id,body)
  }
}
