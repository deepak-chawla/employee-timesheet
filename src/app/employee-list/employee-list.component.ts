import { Component, OnInit } from '@angular/core';
import {EmployeesService} from "../employees.service";
import {Employee} from "../Employee";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeesService: EmployeesService) { }



  ngOnInit(): void {
    this.employeesService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }



}
