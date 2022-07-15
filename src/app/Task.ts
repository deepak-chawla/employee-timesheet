import { Employee } from "./Employee";

export interface Task {
    tid: number,
    taskName: number,
    date: Date,
    sunday: number,
    monday: number,
    tuesday: number,
    wednesday: number,
    thursday: number,
    friday: number,
    saturday: number,
    employee: Employee,
}
