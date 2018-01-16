import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFarm, getLocation } from '../actions';
import _ from 'lodash';
import '../App.css';
import geolib from 'geolib';
import { sortByDistance, sortAlphabetically } from '../utils/sort_farms';
import FarmMap from '../components/farm_map';

class FarmsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchFarm(id);
    this.props.getLocation();
  }


  render() {
    if(!this.props.farm) {
      return(
        <div>Loading!</div>
      )
    }

    return(
      <div>
        <h1>{this.props.farm.id}</h1>
        <FarmMap
          lat={this.props.farm.geolocation.lat}
          lng={this.props.farm.geolocation.lng} 
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { 
    farm: state.farms[1],//state.farms[ownProps.match.params.id], 
    location: state.location };
}

export default connect(mapStateToProps, { fetchFarm, getLocation })(FarmsShow);
