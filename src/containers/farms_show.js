import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFarms, getLocation } from '../actions';
import _ from 'lodash';
import '../css/styles.css';
import geolib from 'geolib';
import FarmMap from '../components/farm_map';
import config from '../config.js';

class FarmsShow extends Component {
  componentDidMount() {
    if (!this.props.farm) {
      //const { id } = this.props.match.params;
      this.props.fetchFarms(); //update to use fetchFarm(id) once the API is ready
      this.props.getLocation();
    }
  }


  render() {
    if(!this.props.farm) {
      return(
        <div>Loading!</div>
      )
    }

    return(
      <div className="farms-show">
        <h1>{this.props.farm.name}</h1>
        <FarmMap
          lat={this.props.farm.geolocation.lat}
          lng={this.props.farm.geolocation.lng} 
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

function mapStateToProps({ farms, location }, ownProps) {
  console.log(farms);
  console.log('own props: ', ownProps);
  return { 
    farm: farms[ownProps.match.params.id], 
    location: location };
}

export default connect(mapStateToProps, { fetchFarms, getLocation })(FarmsShow);
