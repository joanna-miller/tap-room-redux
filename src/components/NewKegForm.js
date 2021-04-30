import React from 'react';
import { v4 } from 'uuid';
import { Form, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

function NewKegForm(props){
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value, 
      brand: event.target.brand.value, 
      price: event.target.price.value, 
      alcoholContent: event.target.alcoholContent.value, 
      remainingStock: 124, 
      id: v4()});
  };
  return(
    <React.Fragment>
      <Form onSubmit={handleNewKegFormSubmission}>
        <Form.Control name='name' type='text' placeholder='Name' style={{marginBottom: '20px'}}/>
        <Form.Control name='brand' type='text' placeholder='Brand' style={{marginBottom: '20px'}}/>
        <Form.Control name='price' type='text' placeholder='Price' style={{marginBottom: '20px'}}/>
        <Form.Control name='alcoholContent' type='text' placeholder='ABV' style={{marginBottom: '20px'}}/>
        <Button variant="outline-dark" type="submit" style={{marginBottom: '20px'}}>Add New Keg</Button>
      </Form>
    </React.Fragment>
  );
  
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;