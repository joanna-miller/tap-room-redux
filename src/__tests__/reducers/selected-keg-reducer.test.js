import selectedKegReducer from '../../reducers/selected-keg-reducer';

describe('selectedKegReducer', () => {
  let action;

  const currentState = {
    1: {
      name: 'a beer',
      brand: 'beer brand',
      price: '$6',
      alcoholContent: '5%',
      remainingStock: 124,
      id: 1
    },
    2: {
      name: 'another beer',
      brand: 'other brand',
      price: '$6',
      alcoholContent: '5%',
      remainingStock: 124,
      id: 1
    }
  }
  
  it('should return default state if no action type is recognized', () => {
    expect(selectedKegReducer(null, { type: null })).toEqual(null)
  })

  it('should set selectedKeg to value of keg', () => {
    action = {
      type: 'SELECT_KEG',
      id: 1
    };
    expect(selectedKegReducer(currentState, action)).toEqual({
        name: 'a beer',
        brand: 'beer brand',
        price: '$6',
        alcoholContent: '5%',
        remainingStock: 124,
        id: 1
    })
  })
})