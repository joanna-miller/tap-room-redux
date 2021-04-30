import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function KegDetail(props){
  const { keg, onClickingDelete } = props;
  return(
    <>
      <h1>Keg Detail</h1>
      <h3>{keg.brand}: {keg.name}</h3>
      <p>Price: ${keg.price}</p>
      <p>ABV: {keg.alcoholContent}</p>
      <p>Pints Remaining: {keg.remainingStock}</p>
      <Button onClick = {() => props.onClickingDelete(keg.id)}variant="outline-dark" type="submit" style={{marginBottom: '20px'}}>Delete Keg</Button>
    </>
  )
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func
}

export default KegDetail;