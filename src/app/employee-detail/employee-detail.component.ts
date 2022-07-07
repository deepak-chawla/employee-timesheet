import {AfterContentInit, Component, OnInit} from '@angular/core';
import {Employee} from "../Employee";
import {ActivatedRoute} from "@angular/router";
import {EmployeesService} from "../employees.service";
import * as $ from 'jquery';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})

export class EmployeeDetailComponent implements OnInit{

  employees: Employee[] = [];
  employeeId: any
  selectedEmployee: any;


  constructor(private route: ActivatedRoute, private employeesService: EmployeesService) {
  }

  onEmployeeSelected(value: any): void{
    this.selectedEmployee = this.employees.find(employees => employees.id == value);
    console.log(this.selectedEmployee)
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
    this.employeesService.getEmployees()
      .subscribe(employees =>
      {this.employees = employees;
        this.selectedEmployee = this.employees.find(employee => employee.id == this.employeeId);
      });
    this.employeeId = this.route.snapshot.paramMap.get("employeeId");

  }




}
