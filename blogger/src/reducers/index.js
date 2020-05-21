import { combineReducers } from 'redux'
import { sumbitReducer } from './submitreducer'
import { readreducer } from './readreducer'

export const rootReducer = combineReducers({ submit: sumbitReducer, read: readreducer })