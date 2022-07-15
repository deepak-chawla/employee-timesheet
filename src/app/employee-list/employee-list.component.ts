import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employee-service/employees.service';
import {Employee} from "../Employee";
import {TaskService} from "../services/task-service/task.service";
import {Task} from "../Task";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  tasks: Task[] = [];

  constructor(
    private employeesService: EmployeesService,
    private taskService: TaskService
  ) { }

  getWeeklyEffort(): any{
    return this.tasks.reduce((total,curValue) => {
        return total +
          curValue.sunday +
          curValue.monday +
          curValue.tuesday +
          curValue.wednesday +
          curValue.thursday +
          curValue.friday +
          curValue.saturday
      },0
    )
  }

  getTasksOfEmployee(employee: Employee): void{
    this.taskService.getEmployeeTasks(employee)
      .subscribe(tasks => this.tasks = tasks);
  }


  ngOnInit(): void {
    this.employeesService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }



}
