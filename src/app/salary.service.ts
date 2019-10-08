import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Salary } from './Models/Salary';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  constructor(private http:HttpClient) { }

  createSalary(body){
    return this.http.post(environment.ServerUrl+'Salaries',body).pipe(
       catchError(this.handleError)
    )
  }

  getSalaryById(id){
    return this.http.get<Salary>(environment.ServerUrl+'Salaries'+id).pipe(
      catchError(this.handleError)
    )
  }

  getAllSalaries(){
    return this.http.get<Salary[]>(environment.ServerUrl+'Salaries').pipe(
      catchError(this.handleError)
    )
  }

  deleteSalary(id){
    return this.http.delete(environment.ServerUrl+'Salaries'+id).pipe(
      catchError(this.handleError)
    )
  }












  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      if(error.status ==400)
      { 
        return throwError(
          'invalid request '
        )
      
      
      }
  else if(error.status ==0)
  {
    return throwError(
      'server not found '
    )
  }
      return throwError(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
