import * as actions from './../../actions';

describe('help queue actions', () => {
  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: 'DELETE_KEG',
      id: 1
    });
  });
  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });
  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({
      name: 'a beer',
      brand: 'beer brand',
      price: '$6',
      alcoholContent: '5%',
      remainingStock: 124,
      id: 1
    })).toEqual({
      type: 'ADD_KEG',
      name: 'a beer',
      brand: 'beer brand',
      price: '$6',
      alcoholContent: '5%',
      remainingStock: 124,
      id: 1
    });
  });
  it('selectKeg should create SELECT_KEG action', () => {
    expect(actions.selectKeg({
      name: 'a beer',
      brand: 'beer brand',
      price: '$6',
      alcoholContent: '5%',
      remainingStock: 124,
      id: 1
    })).toEqual({
      type: 'SELECT_KEG',
      name: 'a beer',
      brand: 'beer brand',
      price: '$6',
      alcoholContent: '5%',
      remainingStock: 124,
      id: 1
    });
  });
  it('unselectKeg should create UNSELECT_KEG action', () => {
    expect(actions.unselectKeg()).toEqual({
      type: 'UNSELECT_KEG'
    });
  });
});