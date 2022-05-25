import { RootAction } from '../src/store/types'
import { RootState } from '../src/store/reducers'
import { Epic, StateObservable } from 'redux-observable'
import { from, of, Subject, take, toArray } from 'rxjs'

export const testEpic = (
  epic: Epic<RootAction, RootAction, RootState>,
  action: RootAction | Array<RootAction>,
  callback: (actions: RootAction | Array<RootAction>) => void,
  state: Partial<RootState> = {},
  takeCount = 1,
): void => {
  const actions$ = Array.isArray(action) ? from(action) : of(action)
  const state$ = new StateObservable<RootState>(new Subject(), state as RootState)
  epic(actions$, state$, undefined).pipe(take(takeCount), toArray()).subscribe(callback)
}
