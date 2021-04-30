import React from 'react';
import { MDBContainer, MDBCol } from 'mdbreact'
import Header from './Header';
import KegControl from './KegControl.js';

function App() {
  return (
    <>
      <Header />
      <MDBContainer>
        <MDBCol><KegControl /></MDBCol>
      </MDBContainer>
    </>
  );
}

export default App;
