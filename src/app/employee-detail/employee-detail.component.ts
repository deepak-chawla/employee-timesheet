import { Component, OnInit } from '@angular/core';
import {Employee} from "../Employee";
import {ActivatedRoute} from "@angular/router";
import {EmployeesService} from "../employees.service";
import * as $ from 'jquery';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})

export class EmployeeDetailComponent implements OnInit {

  employees: Employee[] = [];
  selectedEmployee: any;
  employeeId: any;
  week: number  = 0;
  task: string = '';

  constructor(private route: ActivatedRoute, private employeesService: EmployeesService) { }

  onEmployeeSelected(value:unknown){
    this.selectedEmployee = this.filterEmployeeById(value as number);
    this.week = 0;
  }

  getEmployees(): void{
   this.employeesService.getEmployees()
     .subscribe(employees => this.employees = employees);
  }

  filterEmployeeById(id: number): Employee{
    return this.employees.filter((employee: any)=> employee.id == id)[0];
  }

  nextWeek(): void{
    if(this.selectedEmployee.weeks.length-1 > this.week){
      this.week += 1;
    }
  }

  previousWeek(): void{
    if(this.week > 0)
      this.week -= 1;
  }

  addRowToTable() {
    $("#total-hours").before("<tr>" +
      "<td><input type='text' style='border: none; width: 100%' placeholder='New Task'></td>" +
      "<td><input type='number' style='border: none; width: 100%' placeholder='hour'></td>" +
      "<td><input type='number' style='border: none; width: 100%' placeholder='hour'></td>" +
      "<td><input type='number' style='border: none; width: 100%' placeholder='hour'></td>" +
      "<td><input type='number' style='border: none; width: 100%' placeholder='hour'></td>" +
      "<td><input type='number' style='border: none; width: 100%' placeholder='hour'></td>" +
      "<td><input type='number' style='border: none; width: 100%' placeholder='hour'></td>" +
      "<td><input type='number' style='border: none; width: 100%' placeholder='hour'></td>" +
      "</tr>");
  }


  ngOnInit(): void {
    this.getEmployees();
    this.employeeId = this.route.snapshot.paramMap.get('employeeId');
    this.selectedEmployee = this.filterEmployeeById(this.employeeId);
  }

}
