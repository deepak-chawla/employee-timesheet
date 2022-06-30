import { Component, OnInit } from '@angular/core';
import {Employee} from "../Employee";
import {ActivatedRoute} from "@angular/router";
import {EmployeesService} from "../employees.service";
import {employees} from "../../employees";


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})

export class EmployeeDetailComponent implements OnInit {

  employees: Employee[] = [];
  selectedEmployee: any;
  employeeId: any;

  constructor(private route: ActivatedRoute, private employeesService: EmployeesService) { }

  onEmployeeSelected(value:unknown){
    this.selectedEmployee = this.filterEmployeeById(value as number);
    console.log(this.selectedEmployee)
  }

  getEmployees(): void{
   this.employeesService.getEmployees()
     .subscribe(employees => this.employees = employees);
   console.log("employees" + this.employees );
  }

  filterEmployeeById(id: number): Employee{
    return this.employees.filter((employee: any)=> employee.id == id)[0];
  }



  ngOnInit(): void {
    this.getEmployees();
    this.employeeId = this.route.snapshot.paramMap.get('employeeId');
    this.selectedEmployee = this.filterEmployeeById(this.employeeId);
  }

}
