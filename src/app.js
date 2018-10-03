import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouters';
import { Provider } from 'react-redux';
import { firebase } from './firebase/firebase';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import LoadingPage from './components/LoadingPage';

import 'react-dates/initialize';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let isRender = false;
const renderApp = () => {
    if (!isRender) {
        ReactDOM.render(jsx, document.getElementById('app'));
        isRender = true;
    }
};



ReactDOM.render(<LoadingPage />, document.getElementById('app'));


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('login');
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    }
    else {
        console.log('login out');
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});



