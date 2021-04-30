import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';

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
    const selectedKeg = this.props.masterKegList[id];
    this.setState({selectedKeg: selectedKeg});
  }
  
  handleDeletingTicket = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id)
    dispatch(action);
    this.setState({selectedKeg: null});
  }

  handleSellingPint = (id) => {
    const { dispatch } = this.props;
    const keg = this.props.masterKegList[id];
    const { name, brand, price, alcoholContent, remainingStock } = keg
    if (keg.remainingStock > 0) {
      keg.remainingStock = keg.remainingStock - 1
      const action = a.addKeg(keg);
      dispatch(action);
    }
  } 

  render() {
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