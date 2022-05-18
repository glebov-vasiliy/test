import { AppState } from '../types/appState'
import * as Actions from '../actions'
import { createReducer } from 'typesafe-actions'
import { RootAction } from '../types'

const initialState: AppState = { defaultPerson: { id: 0, name: '', surname: '', age: '', city: '' }, tables: [[]] }
export const appReducer = createReducer<AppState, RootAction>(initialState)
  .handleAction(Actions.addItem, (state, { payload: person }) => ({
    ...state,
    tables: [
      ...state.tables.map((value, index) =>
        index ? value : [{ ...person, id: state.tables[0].length + 1 }, ...state.tables[0]],
      ),
    ],
  }))
  .handleAction(Actions.saveItem, (state, { payload: { person, tableId } }) => ({
    ...state,
    tables: [
      ...state.tables.map((value, index) =>
        index === tableId ? [...state.tables[0].map((p) => (p.id === person.id ? person : p))] : value,
      ),
    ],
  }))
  .handleAction(Actions.updateTable, (state, { payload: { tableId, persons } }) => ({
    ...state,
    tables: state.tables.map((table, index) => (index === tableId ? persons : table)),
  }))
  .handleAction(Actions.updateTables, (state, { payload: tables }) => ({
    ...state,
    tables,
  }))
  .handleAction(Actions.setEditableItem, (state, { payload: editableItem }) => ({
    ...state,
    editableItem,
  }))
