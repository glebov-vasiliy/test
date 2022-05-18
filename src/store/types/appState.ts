export type AppState = {
  tables: Tables
  defaultPerson: Person
  editableItem?: { tableId: number; personId: number }
}
export type Person = {
  id: number
  name: string
  surname: string
  age: string
  city: string
}
export type Table = Array<Person>
export type Tables = Array<Table>
