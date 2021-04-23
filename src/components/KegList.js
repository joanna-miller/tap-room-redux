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
        {props.kegList.map((beer, index) =>
          <Keg name={beer.name}
          brand={beer.brand}
          price={beer.price}
          alcoholContent={beer.alcoholContent}
          remainingStock={beer.remainingStock}
          key={index}/>
        )}
      </Card.Body>
    </Card>
  )
}

KegList.propTypes = {
  kegList: PropTypes.array
}

export default KegList;