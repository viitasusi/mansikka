import React, { Component } from 'react';
import mansikka from '../mansikka.svg';
import '../css/header.css';
import '../css/styles.css';


class Header extends Component {
  render() {
    return (
    <div className='Header header'>
      <img src={mansikka} className="Header-mansikka" alt="mansikka" />
    </div>
    )
  }
}

export default Header;
