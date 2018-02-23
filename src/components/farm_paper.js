import React from 'react';
import Paper from "material-ui/Paper";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/styles.css';

const FarmPaper = (props) => {
  return(
      <Paper className="farm-paper">
        <Link to={`/farms/${props.id}`} className="farm-paper-link">
          <h3>{props.id}</h3>
          <div>Osoite: {props.address}, {props.zip} {props.city}</div>
          <div>Etäisyys: {props.distance}km</div>
        </Link>
      </Paper>
  );
}

FarmPaper.propTypes = {
  id: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  distance: PropTypes.number
}

export default FarmPaper;
