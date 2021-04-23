import React from 'react';
import Card from 'react-bootstrap/Card'
import Keg from './Keg';
import PropTypes from 'prop-types'

function KegList(props){
  return(
    <Card style={{width: '40rem'}}>
      <Card.Header>
        <h2>Beer on Tap</h2>
      </Card.Header>
      <Card.Body>
        {props.kegList.map((keg) =>
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
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  onPintSale: PropTypes.func
}

export default KegList;