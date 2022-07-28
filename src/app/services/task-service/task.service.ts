import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/shared/Employee';
import { Task } from 'src/app/shared/Task';
import {
  getWeekSaturdayDate,
  getWeekSundayDate,
} from '../../shared/helperFunctions';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private taskUrl: string = 'http://localhost:8080/api/task';

  constructor(private http: HttpClient) {}

  getEmployeeTasks(emp: Employee, previousWeek: number): Observable<Task[]> {
    return this.http.get<Task[]>(
      this.taskUrl +
        `/${emp.id}?startDate=${getWeekSundayDate(
          previousWeek
        )}&endDate=${getWeekSaturdayDate(previousWeek)}`
    );
  }

  updateEmployeeTask(tasks: Task[]): Observable<Task[]> {
    return this.http.put<Task[]>(this.taskUrl, tasks);
  }

  getWeeklyTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(
      this.taskUrl +
        `/weekly?startDate=${getWeekSundayDate(
          0
        )}&endDate=${getWeekSaturdayDate(0)}`
    );
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskUrl + '/tasks');
  }
}
