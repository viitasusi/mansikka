import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFarm, getLocation } from '../actions';
import _ from 'lodash';
import '../App.css';
import geolib from 'geolib';
import { sortByDistance, sortAlphabetically } from '../utils/sort_farms';

class FarmsShow extends Component {
  componentDidMount() {
    if (!this.props.farm) {
      const { id } = this.props.match.params;
      this.props.fetchFarm(id);
    }
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
        {this.props.farm.address}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { farm: state.farms[ownProps.match.params.id], location: state.location };
}

export default connect(mapStateToProps, { fetchFarm, getLocation })(FarmsShow);
