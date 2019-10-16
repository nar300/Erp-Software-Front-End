import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Payroll } from './Models/Payroll';

@Injectable({
  providedIn: 'root'
})
export class PayrollService {

  constructor(private http:HttpClient) { }

  getPayroll(id){
    return this.http.get<Payroll>(environment.ServerUrl+'Payrolls/'+id)
  }
}
