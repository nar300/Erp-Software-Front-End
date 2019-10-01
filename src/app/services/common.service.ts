import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Employee } from '../Models/Employee';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  

  constructor(private http:HttpClient)
   { 

  }

  public getAll(){
    return this.http.get<Employee[]>(environment.ServerUrl+'Employees').pipe
    (catchError(this.handleError));
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
