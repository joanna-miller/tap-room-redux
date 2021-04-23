import React from 'react';
import Card from 'react-bootstrap/Card'
import Keg from './Keg';

const tempKegList=[
  {
  name: '60 Minute IPA',
  brand: 'Dogfish Head',
  price: '$6', 
  alcoholContent: '6%',
  remainingStock: 124
  },
  {
    name: 'Hazy-O',
    brand: 'Dogfish Head',
    price: '$6', 
    alcoholContent: '6%',
    remainingStock: 124
  },
  {
    name: 'Liquid Truth Serum IPA',
    brand: 'Dogfish Head',
    price: '$6', 
    alcoholContent: '6%',
    remainingStock: 124
  }
]

function KegList(){
  return(
    <Card style={{width: '40rem'}}>
      <Card.Header>
        <h2>Beer on Tap</h2>
      </Card.Header>
      <Card.Body>
        {tempKegList.map((beer, index) =>
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

export default KegList;