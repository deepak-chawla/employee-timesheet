import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/shared/Employee';
import { Task } from 'src/app/shared/Task';
import { getEndWeekDate, getLastWeekDate } from '../../shared/helperFunctions';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private taskUrl: string = 'http://localhost:8080/api/task';

  constructor(private http: HttpClient) {}

  getEmployeeTasks(emp: Employee, week: number): Observable<Task[]> {
    return this.http.get<Task[]>(
      this.taskUrl +
        `/${emp.id}?startDate=${getLastWeekDate(week)}&endDate=${getEndWeekDate(
          week
        )}`
    );
  }

  updateEmployeeTask(tasks: Task[]): Observable<Task[]> {
    return this.http.put<Task[]>(this.taskUrl, tasks);
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskUrl + '/tasks');
  }
}
