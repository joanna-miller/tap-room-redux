import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';

class KegControl extends React.Component {

  handleClick = () => {
    if (this.isNotEmpty(this.props.selectedKeg)) {
      const { dispatch } = this.props;
      const action = a.unselectKeg()
      dispatch(action)
    } else { 
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, alcoholContent, remainingStock } = newKeg;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => {
    const keg = this.props.masterKegList[id];
    const { dispatch } = this.props;
    const action = a.selectKeg(keg);
    dispatch(action);
    console.log(this.props.selectedKeg)
  }
  
  handleDeletingTicket = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id)
    dispatch(action);
    const action2 = a.unselectKeg()
    dispatch(action2);
  }

  handleSellingPint = (id) => {
    const { dispatch } = this.props;
    const keg = this.props.masterKegList[id];
    const { remainingStock, ...payload } = keg
    if (keg.remainingStock > 0) {
      keg.remainingStock = keg.remainingStock - 1
      const action = a.addKeg(keg);
      dispatch(action);
    }
  } 

  isNotEmpty = (obj) => {
    return Object.keys(obj).length != 0;
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.isNotEmpty(this.props.selectedKeg)) {
      currentlyVisibleState = <KegDetail keg={this.props.selectedKeg} onClickingDelete={this.handleDeletingTicket} />
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
  formVisibleOnPage: PropTypes.bool,
  selectedKeg: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedKeg: state.selectedKeg
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;