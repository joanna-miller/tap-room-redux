import React from 'react';
import './../App.css';
import Container from 'react-bootstrap/Container'
import Header from './Header';
import KegControl from './KegControl.js';


function App() {
  return (
    <>
      <Header />
      <Container >
        <KegControl />
      </Container>
    </>
  );
}

export default App;
