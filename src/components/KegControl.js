import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import Button from 'react-bootstrap/Button'
import { v4 } from 'uuid'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeg: null
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null
      });
    } else { 
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, alcoholContent, remainingStock } = newKeg;
    const action = {
      type: 'ADD_KEG',
      id: id,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      remainingStock: remainingStock
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({selectedKeg: selectedKeg});
  }
  
  handleDeletingTicket = (id) => {
    console.log('made it')
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id: id
    }
    dispatch(action);
    this.setState({selectedKeg: null});
  }

  handleSellingPint = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    if (selectedKeg.remainingStock > 0) {
      this.setState({
        masterKegList: newMasterKegList.concat({
          name: selectedKeg.name, 
          brand: selectedKeg.brand, 
          price: selectedKeg.price, 
          alcoholContent: selectedKeg.alcoholContent, 
          remainingStock: (selectedKeg.remainingStock - 1),
          id: v4()}).sort((a, b) => (a.name > b.name ? 1 : -1))
      })
    } 
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg={this.state.selectedKeg} onClickingDelete={this.handleDeletingTicket} />
      buttonText = "Return to Keg List"
    } else if (this.props.formVisibleOnPage){
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List"
    } else {
      currentlyVisibleState = <KegList kegList={this.props.masterKegList} 
      onPintSale = {this.handleSellingPint}
      onKegSelection={this.handleChangingSelectedKeg}/>
      buttonText = "Add Keg"
    }
    return(
      <>
        <Button style={{marginBottom: '20px'}} variant="outline-dark" size='lg' onClick={this.handleClick}>{buttonText}</Button>
        {currentlyVisibleState}
      </>
    ); 
  };
}

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;