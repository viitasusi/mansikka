import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise';

import reducers from './reducers';

import FarmsIndex from './containers/farms_index.js';
import FarmsShow from './containers/farms_show.js';
import FarmsAdd from './containers/farms_add.js';
import Header from './components/Header.js'

import './css/styles.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <MuiThemeProvider>
      <BrowserRouter>
        <div className="body-container">
          <Header />
          <div className="main">
            <Switch>
              <Route exact path="/farms/add" component={FarmsAdd} />
              <Route path="/farms/:id" component={FarmsShow} />
              <Route exact={true} path="/" component={FarmsIndex} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
  , document.querySelector('.root')
);

