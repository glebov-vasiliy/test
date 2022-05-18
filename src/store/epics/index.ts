import { combineEpics } from 'redux-observable'
import appEpics from './appEpics'

export const rootEpics = combineEpics(...Object.values(appEpics))
