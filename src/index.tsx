import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router,  BrowserRouter } from 'react-router-dom';
import history from './helper/history';

import { Provider as ReduxProvider } from "react-redux";
import store from "./store/index.store";


ReactDOM.render(

    <ReduxProvider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </ReduxProvider>,
    document.getElementById('root')
);