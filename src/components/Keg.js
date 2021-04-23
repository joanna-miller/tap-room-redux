import React from "react";
import PropTypes from "prop-types";
import { Card } from 'react-bootstrap';

function Keg(props){
  return(
    <Card style={{width: '18rem'}}>
      <Card.Header><h3>{props.name}</h3></Card.Header>
      <Card.Body>
        <p>Brand: {props.brand}</p>
        <p>Price: {props.price}</p>
        <p>ABV: {props.alcoholContent}</p>
        <p>Remaining Stock: {props.remainingStock} pints</p>
      </Card.Body>
    </Card>
  )
};

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string, 
  alcoholContent: PropTypes.string,
  remainingStock: PropTypes.number
}

export default Keg;