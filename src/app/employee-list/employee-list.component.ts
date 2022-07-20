import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employee-service/employees.service';
import { Employee } from '../Employee';
import { TaskService } from '../services/task-service/task.service';
import { Task } from '../Task';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  taskList: Task[] = [];

  constructor(
    private employeesService: EmployeesService,
    private taskServices: TaskService
  ) {}

  getWeeklyTotalHours(employeeId: number): number {
    const empTasks = this.taskList.filter(
      (task) => task.employee.id == employeeId
    );
    return empTasks.reduce((total, currentValue) => {
      total +=
        currentValue.sunday +
        currentValue.monday +
        currentValue.tuesday +
        currentValue.wednesday +
        currentValue.thursday +
        currentValue.friday +
        currentValue.saturday;
      return total;
    }, 0);
  }

  ngOnInit(): void {
    this.employeesService
      .getEmployees()
      .subscribe((employees) => (this.employees = employees));
    this.taskServices.getTasks().subscribe((tasks) => (this.taskList = tasks));
  }
}
