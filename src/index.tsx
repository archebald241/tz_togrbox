import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import "./styles/index.scss";
import App from './App';
import { setupStore } from './store';

const store = setupStore();

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);