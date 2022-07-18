import {Component, OnInit} from '@angular/core';
import {Employee} from "../Employee";
import {ActivatedRoute} from "@angular/router";
import {EmployeesService} from '../services/employee-service/employees.service';
import {FormGroup, FormBuilder, FormControl, FormArray} from '@angular/forms';
import * as $ from 'jquery';
import {TaskService} from '../services/task-service/task.service';
import {Task} from '../Task';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})

export class EmployeeDetailComponent implements OnInit {

  employees: Employee[] = [];
  employeeId: any
  selectedEmployee: any;
  tasks: Task[] = [];
  taskForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private employeesService: EmployeesService,
    private taskService: TaskService,
    private fb: FormBuilder
  ) {
  }

  createTaskForm() {
    this.taskForm = this.fb.group({
      Tasks: this.fb.array([]),
    });
  }

  get formArr() {
    return this.taskForm.get('Tasks') as FormArray;
  }

  // initTasks() {
  //   return this.fb.group({
  //     taskName: [''],
  //     sunday: [''],
  //     monday: [''],
  //     tuesday: [''],
  //     wednesday: [''],
  //     thursday: [''],
  //     friday: [''],
  //     saturday: ['']
  //   });
  // }

  renderTasks() {
    this.tasks.forEach((task) => {
      this.formArr.push(this.addTask(task));
    });
  }

  addTask(task: any) {
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
      employee: [task.employee]
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
      saturday: 0
    }
    this.formArr.push(this.addTask(obj));
  }

  onSubmit(): void{
    this.taskForm.value.Tasks.forEach((task: Task)=>{
      if(task.tid == null){
        task.employee = this.selectedEmployee;
      }
      this.taskService.updateEmployeeTask(task).subscribe(
        task => console.log(task)
      )
    })
  }


  onEmployeeSelected(value: any): void {
    this.selectedEmployee = this.employees.find(employees => employees.id == value);
    this.taskService.getEmployeeTasks(this.selectedEmployee)
      .subscribe(tasks => {
        this.tasks = tasks;
        this.createTaskForm();
        this.renderTasks();
      });
    this.employeeId = 0;
  }

  ngOnInit(): void {

    this.employeesService.getEmployees()
      .subscribe(employees => {
        this.employees = employees;
        this.selectedEmployee = this.employees.find(employee => employee.id == this.employeeId);
        this.taskService.getEmployeeTasks(this.selectedEmployee)
          .subscribe(tasks => {
            this.tasks = tasks;
            this.createTaskForm();
            this.renderTasks();
          });
      });
    this.employeeId = this.route.snapshot.paramMap.get("employeeId");

  }

}
