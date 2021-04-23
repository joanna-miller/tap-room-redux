import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props){
  const { keg } = props;
  return(
    <>
      <h1>Keg Detail</h1>
      <h3>{keg.brand}: {keg.name}</h3>
      <p>Price: ${keg.price}</p>
      <p>ABV: {keg.alcoholContent}</p>
      <p>Pints Remaining: {keg.remainingStock}</p>
    </>
  )
}

KegDetail.propTypes = {
  keg: PropTypes.object
}

export default KegDetail;