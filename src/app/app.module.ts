import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeesService } from './services/employee-service/employees.service';
import { TaskService } from './services/task-service/task.service';
import { TotalWeekHourPipe } from './shared/custom-pipe/total-week-hour.pipe';

@NgModule({
  declarations: [AppComponent, routingComponents, TotalWeekHourPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [EmployeesService, TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
