import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from "react";
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import GlobalStyles from 'components/GlobalStyles';
import anime from 'animejs';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalStyles/>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);