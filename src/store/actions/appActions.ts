import { createAction } from 'typesafe-actions'
import { Person, Tables } from '../types/appState'

export const addItem = createAction('@@app/addItem')<Person>()
export const saveItem = createAction('@@app/saveItem')<{ tableId: number; person: Person }>()
export const setEditableItem = createAction('@@app/setEditableItem')<
  { tableId: number; personId: number } | undefined
>()
export const updateTable = createAction('@@app/updateTable')<{ tableId: number; persons: Person[] }>()
export const updateTables = createAction('@@app/updateTables')<Tables>()
