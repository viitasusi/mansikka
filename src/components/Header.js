import React, { Component } from 'react';
import mansikka from '../mansikka.svg';
import '../Header.css'
import '../App.css'


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
