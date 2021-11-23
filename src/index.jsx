import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, HashRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
import { CookiesProvider } from 'react-cookie';
import axios from 'axios';

// Components
import App from './components/App/App';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <BrowserRouter>
        <App></App>
    </BrowserRouter>
    ,rootElement
);