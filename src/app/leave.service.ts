import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Leave } from './Models/Leave';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(private http:HttpClient) { }

  createleave(body){
    return this.http.post(environment.ServerUrl+'Leaves',body)
  }

  getLeaves(){
    return this.http.get<Leave[]>(environment.ServerUrl+'Leaves')
  }
}
