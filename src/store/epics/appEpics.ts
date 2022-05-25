import { filter, map } from 'rxjs'
import { Epic } from 'redux-observable'
import { RootAction } from '../types'
import { RootState } from '../reducers'
import { isActionOf } from 'typesafe-actions'
import * as Actions from '../actions'

//  this is the only place i could think of how to use rxJs in this app  )))

export const onSaveItemEpic: Epic<RootAction, RootAction, RootState> = (action$) =>
  action$.pipe(
    filter(isActionOf(Actions.saveItem)),
    map(() => Actions.setEditableItem(undefined)),
  )
export default [onSaveItemEpic]
