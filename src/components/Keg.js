import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from 'react-bootstrap';

function Keg(props){
  return(
    <Card style={{width: '18rem'}} >
      <Card.Header onClick = {() => props.whenKegClicked(props.id)} ><h3>{props.name}</h3></Card.Header>
      <Card.Body>
        <p>Brand: {props.brand}</p>
        <p>Price: {props.price}</p>
        <p>ABV: {props.alcoholContent}</p>
        <p>Remaining Stock: {props.remainingStock} pints</p>
        <Button onClick = {() => props.whenSellClicked(props.id)}variant="outline-dark" type="submit" style={{marginBottom: '20px'}}>Sold a Pint!</Button>
      </Card.Body>
    </Card>
  )
};

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string, 
  alcoholContent: PropTypes.string,
  remainingStock: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  whenSellClicked: PropTypes.func
}

export default Keg;