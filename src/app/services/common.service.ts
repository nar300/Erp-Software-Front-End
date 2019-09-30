import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Employee } from '../Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  

  constructor(private http:HttpClient)
   { 

  }

  public getAll(){
    return this.http.get<Employee[]>(environment.ServerUrl+'Employees')
  }
}
