import React, { Component } from 'react';
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
          <AppBar
            showMenuIconButton={false}
            title='Mansikka' style={{backgroundColor: '#f80c3a'}}
            iconElementRight={<FlatButton label="Luo tunnukset" style={{backgroundColor: 'white', color: '#f80c3a'}}
                                containerElement={<Link to="/signup" />}
                                linkButton={true}
            />}
          />
      </div>
    )
  }
}

export default Navbar;
