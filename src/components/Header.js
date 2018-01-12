import React, { Component } from 'react';
import mansikka from './mansikka.svg';
import './Header.css'


class Header extends Component {
  render() {
    return (
      <div className='Header'>
      <header className="App-header">
        <h1 className="Header-title">Tervetuloa mansikkaan</h1>
        <img src={mansikka} className="Header-mansikka" alt="mansikka" />
      </header>
      </div>
    )
  }
}

export default Header;
