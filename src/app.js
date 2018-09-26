import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, {history} from './routers/AppRouters';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import getVisibleExpense from './selectors/expenses';
import { Provider } from 'react-redux';
import { firebase } from './firebase/firebase';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore();


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(<p>loading...</p>, document.getElementById('app'));


let isRender = false;
const renderApp = () => {
    if(!isRender){
        ReactDOM.render(jsx, document.getElementById('app'));
        isRender = true;
    }
};


firebase.auth().onAuthStateChanged((user) => {
    if(user){
        console.log('login');
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if(history.location.pathname === '/'){
                history.push('/dashboard');
            }
        });
    }
    else{
        console.log('login out');
        renderApp();
        history.push('/');
    }
});



