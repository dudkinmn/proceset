import React from 'react';
import ReactDOM from 'react-dom';
import { Router,  BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from "react-redux";
import { ApolloProvider } from "@apollo/react-hoc";

import store from "./store/index.store";
import App from './App';
import history from './utils/history';
import client from './utils/apolloClient'


ReactDOM.render(

    <ApolloProvider client={client}>
        <ReduxProvider store={store}>
            <Router history={history}>
                <App />
            </Router>
        </ReduxProvider>
    </ApolloProvider>,
    document.getElementById('root')
);