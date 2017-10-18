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
        <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      </header>
      </div>
    )
  }
}

export default Header;
