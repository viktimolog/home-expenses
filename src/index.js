import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import AppReducer from './reducers'

import {ConnectedRouter, routerMiddleware} from 'react-router-redux';

import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const routing = routerMiddleware(history);

// localStorage.clear();

const store = createStore(
    AppReducer,
    compose(
        applyMiddleware(routing, thunk),
    )
);


ReactDOM.render(
    <Provider store = {store}>
        <ConnectedRouter history={history}>
            < App/>
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));




