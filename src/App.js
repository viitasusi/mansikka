import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Frontpage from './Frontpage';
import Signup from './Signup';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path='/' component={Frontpage} />
              <Route path='/signup' component={Signup} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
