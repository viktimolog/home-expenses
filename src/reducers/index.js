import { combineReducers } from 'redux'
import mainReducer from './mainReducer'
import { routerReducer } from 'react-router-redux';

const AppReducer = combineReducers({
  routing: routerReducer,
  mainReducer
})

export default AppReducer
