export interface Employee{
  id: number,
  code: number,
  name: string,
  weeks:({
    tasks:(
    {taskName: string,
      days: ({day: string, hour: number})[]
    })[];
  })[];
}
