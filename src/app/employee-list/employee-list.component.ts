import { Component, OnInit } from '@angular/core';
import {EmployeesService} from "../employees.service";
import {employees} from "../../employees";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: any;

  constructor(private employeesService: EmployeesService) { }


  getEmployees(): void{
    this.employeesService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }

  ngOnInit(): void {
    this.getEmployees();
  }

}
