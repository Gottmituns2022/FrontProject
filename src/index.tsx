import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import Header from './components/Header';
import ChooseCity from './components/ChooseCity';
import {store} from './store/store';
import { Provider } from 'react-redux';
import Content from './components/Content';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <div className="main">
            <Header/>
            <ChooseCity/>
            <Content/>
        </div>
    </Provider>
  </React.StrictMode>  
);
