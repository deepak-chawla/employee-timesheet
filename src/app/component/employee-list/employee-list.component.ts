import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employee-service/employees.service';
import { Employee } from '../../shared/Employee';
import { TaskService } from '../../services/task-service/task.service';
import { Task } from '../../shared/Task';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  weeklyTasks: Task[] = [];

  constructor(
    private employeesService: EmployeesService,
    private taskServices: TaskService
  ) {}

  ngOnInit(): void {
    this.employeesService.getEmployees().subscribe((employees) => {
      this.employees = employees;
    });
    this.taskServices.getWeeklyTasks().subscribe((tasks) => {
      this.weeklyTasks = tasks;
    });
  }
}
