import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/shared/interfaces/Employee';
import { Task } from 'src/app/shared/interfaces/Task';
import {
  getWeekSaturdayDate,
  getWeekSundayDate,
} from '../../shared/helperFunctions';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private TASK_URL: string = 'http://localhost:8080/api/task';

  constructor(private http: HttpClient) {}

  getEmployeeTasks(emp: Employee, previousWeek: number): Observable<Task[]> {
    return this.http.get<Task[]>(
      this.TASK_URL +
        `/${emp.id}?startDate=${getWeekSundayDate(
          previousWeek
        )}&endDate=${getWeekSaturdayDate(previousWeek)}`
    );
  }

  updateEmployeeTask(tasks: Task[]): Observable<Task[]> {
    return this.http.put<Task[]>(this.TASK_URL, tasks);
  }

  getWeeklyTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(
      this.TASK_URL +
        `/weekly?startDate=${getWeekSundayDate(
          0
        )}&endDate=${getWeekSaturdayDate(0)}`
    );
  }
}
