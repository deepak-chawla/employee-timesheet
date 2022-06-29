import { Component, OnInit } from '@angular/core';
import {employees} from "../../employess";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employees = employees;
  selectedEmployee: any;
  employeeId: any;
  constructor(private route: ActivatedRoute) { }

  onEmployeeSelected(value:string){
    this.selectedEmployee = employees.filter((employee)=> employee.id == value);
    console.log(this.selectedEmployee)
  }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.paramMap.get('employeeId');
    console.log(this.employeeId);
  }

}
