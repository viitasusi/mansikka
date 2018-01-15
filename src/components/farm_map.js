import React from 'react'
import PropTypes from 'prop-types'

import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';

const FarmMap = withScriptjs(withGoogleMap((props) => {
  return(
    <div>kartta
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: props.lat, lng: props.lng }}
      >
        {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.lng }} />}
      </GoogleMap>
    </div>

  );
}));

export default FarmMap;