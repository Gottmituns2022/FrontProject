import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HR from './HR';
import ChooseCity from './ChooseCity';
import Content from './Content';
import {store} from './store/store';
import { Provider } from 'react-redux';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <div className="main">
            <HR/>
            <ChooseCity/>
            <App/>
        </div>
    </Provider>
  </React.StrictMode>
);
