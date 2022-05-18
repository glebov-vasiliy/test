import { createStore, compose, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer, RootState } from './reducers'
import { RootAction } from './types'
import { rootEpics } from './epics'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}
const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState>({})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)))
epicMiddleware.run(rootEpics)
export default store
