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
}
