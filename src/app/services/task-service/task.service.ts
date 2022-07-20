import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/Employee';
import { Task } from 'src/app/Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private taskUrl: string = 'http://localhost:8080/api/task';

  constructor(private http: HttpClient) {}

  getEmployeeTasks(emp: Employee): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskUrl + `/${emp.id}`);
  }

  updateEmployeeTask(task: Task): Observable<Task> {
    return this.http.put<Task>(this.taskUrl, task);
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskUrl + '/tasks');
  }
}
