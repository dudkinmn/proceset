import React from 'react';
import ReactDOM from 'react-dom';
import { Router,  BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from "react-redux";

import store from "./store/index.store";
import App from './App';
import history from './utils/history';


ReactDOM.render(

    <ReduxProvider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </ReduxProvider>,
    document.getElementById('root')
);