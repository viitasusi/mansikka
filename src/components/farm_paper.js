import React from 'react';
import Paper from "material-ui/Paper";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/styles.css';

const FarmPaper = (props) => {
  return(
    <Link to={`/farms/${props.id}`} className="link">
      <Paper className="farm-paper">
        <h3>Tilan nimi: {props.id}</h3>
        <div>Osoite: {props.address}, {props.zip} {props.city}</div>
        <div>Etäisyys: {props.distance}km</div>
      </Paper>
    </Link>
  );
}

FarmPaper.propTypes = {
  id: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  distance: PropTypes.number
}

export default FarmPaper;
