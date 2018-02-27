import axios from 'axios';

export const FETCH_FARMS = 'fetch_farms';
export const FETCH_FARM = 'fetch_farm';
export const GET_LOCATION = 'get_location';
export const ADD_FARM = 'add_farm';

const ROOT_URL = process.env.REACT_APP_API_SERVER;

export function fetchFarms() {
  const request = axios.get(`${ROOT_URL}/farms`);

  return {
    type: FETCH_FARMS,
    payload: request
  };
};

export function fetchFarm(id) {
  const request = axios.get(`${ROOT_URL}/farms/${id}`);

  return {
    type: FETCH_FARM,
    payload: request
  }
}

export function addFarm(values, callback) {
  console.log(values);
  const request = values;
  callback();

  return {
    type: ADD_FARM,
    payload: request
  }
}

export const getLocation = () => {
  const geolocation = navigator.geolocation;

  const request = new Promise((resolve, reject) => {
        if (!geolocation) {
            reject(new Error('Not Supported'));
        }

    geolocation.getCurrentPosition((position) => {
        resolve(position);
    }, () => {
        reject (new Error('Permission denied'));
    });
  });

  return {
      type: GET_LOCATION,
      payload: request
  };
};
