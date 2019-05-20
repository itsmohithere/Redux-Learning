import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './redux/store';
import {BrowserRouter, Route,} from 'react-router-dom';
import InputCartValue from './InpurtCartValue/InputCartValue';

/**
 * Provider wrap our whole application to use the redux store vlaue.
 */
ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <Route exact path='/' component={App}  />
            <Route exact path='/inputcartvalue' component={InputCartValue}  />
        </BrowserRouter>
    </Provider>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();