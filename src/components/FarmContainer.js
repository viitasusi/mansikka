import React, { Component } from 'react';
import './Frontpage.css';
import FarmList from './FarmList.js'


class FarmContainer extends Component {
  render() {
    return (
      <div className="FarmContainer">
        <FarmList
          farmListItems= {[{id: 1, name: 'aatalan mansikka', address: 'kuopio', products: {strawberry: true, blueberry: false}}, {id: 2, name: 'suonenjoen mansikka', address: 'suonenjoki', products: {strawberry: true, blueberry: false}}]}
        />
      </div>
    );
  }
}

export default FarmContainer;
