import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

class Navbar extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppBar title='Mansikka' />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default Navbar;
