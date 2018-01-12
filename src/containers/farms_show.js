import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFarms, getLocation } from '../actions';
import _ from 'lodash';
import '../App.css';
import geolib from 'geolib';
import { sortByDistance, sortAlphabetically } from '../utils/sort_farms';

class ShowFarm extends Component {
  componentDidMount() {
    this.props.fetchFarms();
    this.props.getLocation();
  }

  render() {
    return(
      <div>
        Farm
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { farms: state.farms, location: state.location };
}

export default connect(mapStateToProps, { fetchFarms, getLocation })(FarmsIndex);
