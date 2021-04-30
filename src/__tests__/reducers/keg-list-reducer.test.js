import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {
  let action;
  const kegData = {
    name: 'a beer',
    brand: 'beer brand',
    price: '$6',
    alcoholContent: '5%',
    remainingStock: 124,
    id: 1
  };
  it('should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, {type: null})).toEqual({});
  });
  it('should successfully add new keg data to masterKegList', () => {
    const { name, brand, price, alcoholContent, remainingStock, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      remainingStock: remainingStock,
      id: id
    }
    expect(kegListReducer({}, action)).toEqual({[id] : {
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      remainingStock: remainingStock,
      id: id
    }})
  })
})