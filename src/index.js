import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise';

import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';

import reducers from './reducers';

import FarmsIndex from './containers/farms_index.js';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <MuiThemeProvider>
        <div>
          <Switch>
            <Route exact={true} path="/" component={FarmsIndex} />
          </Switch>
        </div>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.root'));

registerServiceWorker();
