import { Injectable } from '@angular/core';
import { Employee } from '../../shared/interfaces/Employee';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  private GET_EMPLOYEES: string = 'http://localhost:8080/api/employee';

  constructor(private http: HttpClient) {}

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.GET_EMPLOYEES);
  }
}
