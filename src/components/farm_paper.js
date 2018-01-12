import React from 'react';
import Paper from "material-ui/Paper";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const FarmPaper = (props) => {
  console.log(props.id);
  return(
    <Link to={`/farms/${props.id}`}>
      <Paper className="farm-paper">
        <div>Tilan nimi: {props.id}</div>
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
