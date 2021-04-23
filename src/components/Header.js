import React from 'react';
import { Jumbotron } from 'react-bootstrap';

function Header(){
  return(
    <Jumbotron style={{textAlign: 'center', backgroundColor: 'black', color: 'white'}}> 
      <h1>Tap Room</h1>
    </Jumbotron>
  )
}

export default Header;