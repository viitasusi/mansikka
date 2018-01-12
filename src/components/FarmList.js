import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Frontpage.css';

class FarmListItem extends Component {
  /*
  constructor(props) {
    super(props);

    this.state = {
      id: ''
      name: '',
      address: '',
      products: {
        strawberry: '',
        blueberry: '',
        mushroom: ''
      }
    }
  }
  */
  render() {
    console.log(this.props.id);
    return (
      <div className="FarmListItem">
          {this.props.name}
          {this.props.address}
          {this.props.products.strawberry ? <p>yes</p> : <p>no</p>}
          {this.props.products.blueberry}
      </div>
    );
  }
}

FarmListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  address: PropTypes.string.isRequired,
  products: PropTypes.object
}

class FarmList extends Component {
  render() {
    return (
      <div className="FarmList">
        <ul>
          {this.props.farmListItems.map(function(farm) {
            return (
              <li key={farm.id}>
                <FarmListItem
                  id={farm.id}
                  name={farm.name}
                  address={farm.address}
                  products={farm.products}
                />
              </li>
            )}
          )}
        </ul>
      </div>
    );
  }
}

export default FarmList;
