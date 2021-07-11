import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import GlobalDatacontextTag from './context/globalDatacontext';
import ConfigComponent from './components/ConfigComponent';
import InfoComponent from './components/InfoComponent';
import './assets/main.scss';

document.head.insertAdjacentHTML(
  'beforeend',
  `<style>html{font-size:initial;}html{font-size:100%;}</style>`
);

var dm = document.createElement('div');
dm.id = 'root';
ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <GlobalDatacontextTag>
        <ConfigComponent />
        <InfoComponent />
      </GlobalDatacontextTag>
    </CookiesProvider>
  </React.StrictMode>,
  document.body.appendChild(dm)
);
