import {Injectable} from '@angular/core';
import {Employee} from "../../Employee";
import {Observable, of} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private employeesUrl: string = "http://localhost:8080/api/employee";

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    //return of(employees);
    return this.http.get<Employee[]>(this.employeesUrl);
  }

  // addEmployee(curObj: any): void{
  //
  // }

}
