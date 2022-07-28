import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../Task';

@Pipe({
  name: 'totalWeeklyHours',
})
export class TotalWeekHourPipe implements PipeTransform {
  transform(employeeId: number, weeklyTasks: Task[]): number {
    const empWeekTasks = weeklyTasks.filter(
      (task) => task.employee.id == employeeId
    );
    return empWeekTasks.reduce((total, currentValue) => {
      total +=
        currentValue.sunday +
        currentValue.monday +
        currentValue.tuesday +
        currentValue.wednesday +
        currentValue.thursday +
        currentValue.friday +
        currentValue.saturday;
      return total;
    }, 0);
  }
}
