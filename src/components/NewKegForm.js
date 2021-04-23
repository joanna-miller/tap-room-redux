import React from 'react';
import { v4} from 'uuid';
import { Form, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

function NewKegForm(props){
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.name.value)
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, remainingStock: 124, id: v4()});
  };
  return(
    <React.Fragment>
      <Form onSubmit={handleNewKegFormSubmission}>
        <Form.Control name='name' type='text' placeholder='Name'/>
        <Form.Control name='brand' type='text' placeholder='Brand'/>
        <Form.Control name='price' type='text' placeholder='Price'/>
        <Form.Control name='alcoholContent' type='text' placeholder='ABV'/>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </React.Fragment>
  );
  
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;