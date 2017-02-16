import { combineReducers } from 'redux'
import dateSetter from './dateSetter'
import screenSelector from './screenSelector'
import localStorage from './localStorage'
import buttonDisplay from './buttonDisplay'

const syncopeCounter = combineReducers({
  dateSetter,
  screenSelector,
  localStorage,
  buttonDisplay
})

export default syncopeCounter
