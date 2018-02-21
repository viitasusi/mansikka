import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFarms, getLocation } from '../actions';
import _ from 'lodash';
import '../css/styles.css';
import { sortByDistance, sortAlphabetically } from '../utils/sort_farms';

import FarmPaper from '../components/farm_paper'

class FarmsIndex extends Component {
  componentDidMount() {
    this.props.fetchFarms();
    this.props.getLocation();
  }

  renderFarms = () => {
    //console.log('props: ', this.props.farms);
    if(this.props.location.lat && this.props.location.lng) {
      return _.map(sortByDistance(this.props.farms, this.props.location), farm => {
        return(
          <FarmPaper
            id={farm.name}
            address={farm.street}
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
            address={farm.street}
            zip={farm.zip}
            city={farm.city}
            key={farm.id}
          />
        );
      });
    }
  }

  render() {
    if(!this.props.farms) {
      return(
        <div>Loading!</div>
      )
    }

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
