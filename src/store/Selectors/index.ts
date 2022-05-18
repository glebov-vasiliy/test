import { RootState } from '../reducers'
import { Person, Tables } from '../types/appState'
import { createSelector } from 'reselect'

export const tablesSelector = ({ appState }: RootState): Tables => appState.tables
export const editableItemSelector = ({ appState }: RootState): { tableId: number; personId: number } | undefined =>
  appState.editableItem
export const defaultPersonSelector = ({ appState }: RootState): Person => appState.defaultPerson
export const editablePersonSelector = createSelector(
  editableItemSelector,
  tablesSelector,
  (item, tables) =>
    item && { person: tables[item.tableId].find((person) => person.id === item.personId), tableId: item.tableId },
)
