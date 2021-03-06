// 1. open terminal
// 2. yarn run dev-server
// 3. yarn run build (if need bundle.js)

// install -> import -> use

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import history from "./history";
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
// import './playground/promises';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter history={history}/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));