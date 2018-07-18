import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'react-router-redux';
import AppReducer from 'reducers'

export const history = createHistory();
const routing = routerMiddleware(history);

const store = createStore(
    AppReducer,
    compose(
        applyMiddleware(routing, thunk),
    )
)
export default store
