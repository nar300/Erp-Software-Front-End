import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Designation } from '../Models/Designation';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DesignatonService {

  constructor(private http:HttpClient) { }


  getallDsg(){
    return this.http.get<Designation[]>(environment.ServerUrl+'Designations')
  }
  deleteDesignation(id){
    return this.http.delete(environment.ServerUrl+'Designations/'+id)
  }

  cerateDesignation(body){
    return this.http.post<Designation>(environment.ServerUrl+'Designations',body)
  }
}
