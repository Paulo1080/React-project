import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { GlobalStyle } from './styles/global'

ReactDOM.render(
  <React.StrictMode>
    <>
      <GlobalStyle />
      <Routes />
    </>    
  </React.StrictMode>,
  document.getElementById('root')
);


