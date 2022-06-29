import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeDetailComponent} from "./employee-detail/employee-detail.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: EmployeeListComponent},
    {path: 'employee/:employeeId', component: EmployeeDetailComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
