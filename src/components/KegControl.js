import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import Button from 'react-bootstrap/Button'
import { v4 } from 'uuid'

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else { 
      this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    console.log(newKeg.id)
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({masterKegList: newMasterKegList.sort((a, b) => (a.name > b.name ? 1 : -1)),
    formVisibleOnPage: false });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
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
      currentlyVisibleState = <KegDetail keg={this.state.selectedKeg} />
      buttonText = "Return to Keg List"
    } else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List"
    } else {
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} 
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

export default KegControl;