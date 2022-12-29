import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'regenerator-runtime/runtime';
import 'whatwg-fetch';
import 'core-js';

import App from './src/App';

import '@Styles/global.css';
import Container from '@Layouts/Container/Container';

const root = ReactDOM.createRoot(document.getElementById('app-root'));

root.render(
    <BrowserRouter>
        <Container>
            <App />
        </Container>
    </BrowserRouter>
);
