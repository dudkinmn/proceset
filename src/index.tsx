import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router,  BrowserRouter } from 'react-router-dom';
import history from './helper/history';


ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>,
    document.getElementById('root')
);