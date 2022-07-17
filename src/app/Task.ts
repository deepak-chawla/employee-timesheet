import {Employee} from "./Employee";

export class Task {

  private _tid: number = 0;
  private _taskName: number = 0;
  private _date: Date = new Date();
  private _sunday: number = 0;
  private _monday: number = 0;
  private _tuesday: number = 0;
  private _wednesday: number = 0;
  private _thursday: number = 0;
  private _friday: number = 0;
  private _saturday: number = 0;
  private _employee: Employee = new Employee();

  constructor() {
  }

  get tid(): number {
    return this._tid;
  }

  set tid(value: number) {
    this._tid = value;
  }

  get taskName(): number {
    return this._taskName;
  }

  set taskName(value: number) {
    this._taskName = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get sunday(): number {
    return this._sunday;
  }

  set sunday(value: number) {
    this._sunday = value;
  }

  get monday(): number {
    return this._monday;
  }

  set monday(value: number) {
    this._monday = value;
  }

  get tuesday(): number {
    return this._tuesday;
  }

  set tuesday(value: number) {
    this._tuesday = value;
  }

  get wednesday(): number {
    return this._wednesday;
  }

  set wednesday(value: number) {
    this._wednesday = value;
  }

  get thursday(): number {
    return this._thursday;
  }

  set thursday(value: number) {
    this._thursday = value;
  }

  get friday(): number {
    return this._friday;
  }

  set friday(value: number) {
    this._friday = value;
  }

  get saturday(): number {
    return this._saturday;
  }

  set saturday(value: number) {
    this._saturday = value;
  }

  get employee(): Employee {
    return this._employee;
  }

  set employee(value: Employee) {
    this._employee = value;
  }

}
