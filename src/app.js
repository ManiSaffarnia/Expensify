import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouters';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import getVisibleExpense from './selectors/expenses';
import { Provider } from 'react-redux';
import './firebase/firebase'

import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore();


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(<p>loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
}).catch(() => {
    ReactDOM.render(<p>there is a problem with conneting to the server</p>, document.getElementById('app'));
});



