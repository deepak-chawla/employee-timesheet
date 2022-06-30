import {Injectable} from '@angular/core';
import {Employee} from "./Employee";
import {employees} from "../employees";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() {
  }

  getEmployees(): Observable<Employee[]>{
     return of(employees);
  }
}
