import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
    ApolloProvider,
  } from '@apollo/client';
import store from './redux/store';
import client from './config/apolloClient';
import App from './App';



ReactDOM.render(
    <ApolloProvider client={client} >
        <Provider store={store}>
            <App />
        </Provider>
    </ApolloProvider>
    , document.getElementById('root'));
