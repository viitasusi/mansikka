import React from 'react';
import Paper from "material-ui/Paper";

const FarmPaper = ({farm}) => {
  console.log(farm.id);
  return(
    <Paper>
      <div>Tilan nimi: {farm.id}</div>
      <div>Osoite: {farm.address}, {farm.zip} {farm.city}</div>
      <div>Etäisyys: {farm.distance} km</div>
    </Paper>
  );
}

export default FarmPaper;
