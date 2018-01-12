import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFarms, getLocation } from '../actions';
import _ from 'lodash';
import '../App.css';
import geolib from 'geolib';
import { sortByDistance, sortAlphabetically } from '../utils/sort_farms';

import FarmPaper from '../components/farm_paper'

class FarmsIndex extends Component {
  componentDidMount() {
    this.props.fetchFarms();
    this.props.getLocation();
  }

  renderFarms = () => {
    if(this.props.location.lat && this.props.location.lng) {
      return _.map(sortByDistance(this.props.farms, this.props.location), farm => {
        return(
          <FarmPaper
            id={farm.id}
            address={farm.address}
            distance={farm.distance}
            zip={farm.zip}
            city={farm.city}
            key={farm.id}
          />
        );
      });
    }
    else {
      return _.map(sortAlphabetically(this.props.farms), farm => {
        return(
          <FarmPaper
            id={farm.id}
            address={farm.address}
            zip={farm.zip}
            city={farm.city}
            key={farm.id}
          />
        );
      });
    }
  }

  render() {
    return(
      <div className="farm-container">
        {this.renderFarms()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { farms: state.farms, location: state.location };
}

export default connect(mapStateToProps, { fetchFarms, getLocation })(FarmsIndex);
