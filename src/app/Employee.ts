export interface Employee{
  id: number,
  code: number,
  name: string,
  weeks:({
    tasks:(
    {taskName: string,
      sunday: number,
      monday: number,
      tuesday: number,
      wednesday: number,
      thursday: number,
      friday: number,
      saturday: number
    })[];
  })[];
}
