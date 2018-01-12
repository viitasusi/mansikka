import geolib from 'geolib';
import _ from 'lodash';

export const sortByDistance = (farms, userGeolocation) => {
  return _.orderBy(_.map(farms, farm => {
    return _.assignIn(farm, {distance: geolib.getDistanceSimple(
      {latitude: farm.geolocation.lat, longitude: farm.geolocation.lng},
      {latitude: userGeolocation.lat, longitude: userGeolocation.lng}
    )/1000});
  }), 'distance', 'asc');
}

export const sortAlphabetically = (farms) => {
  return _.orderBy(farms, 'id', 'asc');
}
