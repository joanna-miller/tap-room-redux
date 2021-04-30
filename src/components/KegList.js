import React from 'react';
import Card from 'react-bootstrap/Card'
import Keg from './Keg';
import PropTypes from 'prop-types'

function KegList(props){
  return(
    <Card>
      <Card.Header style={{textAlign: 'center' }}>
        <h2>Beer on Tap</h2>
      </Card.Header>
      <Card.Body style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
        {Object.values(props.kegList).map((keg) =>
          <Keg whenKegClicked = {props.onKegSelection}
          whenSellClicked = {props.onPintSale}
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          remainingStock={keg.remainingStock}
          id={keg.id}
          key={keg.id} />
        )}
      </Card.Body>
    </Card>
  )
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func,
  onPintSale: PropTypes.func
};

export default KegList;