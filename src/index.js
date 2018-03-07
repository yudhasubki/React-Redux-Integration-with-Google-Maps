import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import css from '../style/style.css';
import App from './components/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import rootReducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducers)}>
        <App/>
    </Provider>, document.getElementById('app')
);