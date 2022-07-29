import { Component, OnInit } from '@angular/core';
import { Employee } from '../../shared/interfaces/Employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../../services/employee-service/employees.service';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { TaskService } from '../../services/task-service/task.service';
import { Task } from '../../shared/interfaces/Task';
import { taskOptions } from '../../shared/constant/TaskOptions';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
})
export class EmployeeDetailComponent implements OnInit {
  employees: Employee[] = [];
  employeeId: any;
  selectedEmployee: any;
  tasks: Task[] = [];
  taskForm!: FormGroup;
  taskOptions: any = taskOptions;

  private week: number = 0;
  private workingHours: number = 24;

  constructor(
    private route: ActivatedRoute,
    private employeesService: EmployeesService,
    private taskService: TaskService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.paramMap.get('employeeId');
    this.createTaskForm();
    this.employeesService.getEmployees().subscribe((employees) => {
      this.employees = employees;
      this.selectedEmployee = this.employees.find(
        (employee) => employee.id == this.employeeId
      );
      this.taskService
        .getEmployeeTasks(this.selectedEmployee, 0)
        .subscribe((tasks) => {
          this.tasks = tasks;
          this.renderTasks();
        });
    });
  }

  private createTaskForm() {
    this.taskForm = this.fb.group({
      Tasks: this.fb.array([]),
    });
  }

  get formArr() {
    return this.taskForm.get('Tasks') as FormArray;
  }

  private renderTasks() {
    this.tasks.forEach((task) => {
      this.formArr.push(this.initTasks(task));
    });
  }

  private addTask(task: any) {
    return this.fb.group({
      tid: [task.tid],
      taskName: [task.taskName, Validators.required],
      sunday: [
        task.sunday,
        Validators.max(this.workingHours - this.getDayTotal('sunday')),
      ],
      monday: [
        task.monday,
        Validators.max(this.workingHours - this.getDayTotal('monday')),
      ],
      tuesday: [
        task.tuesday,
        Validators.max(this.workingHours - this.getDayTotal('tuesday')),
      ],
      wednesday: [
        task.wednesday,
        Validators.max(this.workingHours - this.getDayTotal('wednesday')),
      ],
      thursday: [
        task.thursday,
        Validators.max(this.workingHours - this.getDayTotal('thursday')),
      ],
      friday: [
        task.friday,
        Validators.max(this.workingHours - this.getDayTotal('friday')),
      ],
      saturday: [
        task.saturday,
        Validators.max(this.workingHours - this.getDayTotal('saturday')),
      ],
      date: [new Date()],
      employee: [this.selectedEmployee],
    });
  }

  private initTasks(task: Task) {
    return this.fb.group({
      tid: [task.tid],
      taskName: [task.taskName],
      sunday: [task.sunday],
      monday: [task.monday],
      tuesday: [task.tuesday],
      wednesday: [task.wednesday],
      thursday: [task.thursday],
      friday: [task.friday],
      saturday: [task.saturday],
      date: [task.date],
      employee: [task.employee],
    });
  }

  addNewRow() {
    let obj = {
      taskName: '',
      sunday: 0,
      monday: 0,
      tuesday: 0,
      wednesday: 0,
      thursday: 0,
      friday: 0,
      saturday: 0,
    };
    this.formArr.push(this.addTask(obj));
  }

  onSubmit(): void {
    this.taskService.updateEmployeeTask(this.taskForm.value.Tasks).subscribe(
      (tasks) => {
        this.tasks = tasks;
        alert('Tasks Updated');
      },
      (error) => alert(error.message)
    );
  }

  getDayTotal(day: string): number {
    switch (day) {
      case 'sunday':
        return this.tasks.reduce((total, curObj) => total + curObj.sunday, 0);
        break;
      case 'monday':
        return this.tasks.reduce((total, curObj) => total + curObj.monday, 0);
        break;
      case 'tuesday':
        return this.tasks.reduce((total, curObj) => total + curObj.tuesday, 0);
        break;
      case 'wednesday':
        return this.tasks.reduce(
          (total, curObj) => total + curObj.wednesday,
          0
        );
        break;
      case 'thursday':
        return this.tasks.reduce((total, curObj) => total + curObj.thursday, 0);
        break;
      case 'friday':
        return this.tasks.reduce((total, curObj) => total + curObj.friday, 0);
        break;
      case 'saturday':
        return this.tasks.reduce((total, curObj) => total + curObj.saturday, 0);
        break;
      default:
        return 0;
        break;
    }
  }

  onEmployeeSelected(value: any): void {
    this.selectedEmployee = this.employees.find(
      (employees) => employees.id == value
    );
    this.taskService
      .getEmployeeTasks(this.selectedEmployee, 0)
      .subscribe((tasks) => {
        this.tasks = tasks;
        this.createTaskForm();
        this.renderTasks();
      });
  }

  previousWeek(): void {
    this.week++;
    this.taskService
      .getEmployeeTasks(this.selectedEmployee, this.week)
      .subscribe((tasks) => {
        this.tasks = tasks;
        this.createTaskForm();
        this.renderTasks();
      });
  }

  newWeek(): void {
    if (this.week > 0) {
      this.week--;
      this.taskService
        .getEmployeeTasks(this.selectedEmployee, this.week)
        .subscribe((tasks) => {
          this.tasks = tasks;
          this.createTaskForm();
          this.renderTasks();
        });
    }
  }
}
