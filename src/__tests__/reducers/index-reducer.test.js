import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleOnPage from '../../reducers/form-visible-reducer';
import kegListReducer from '../../reducers/keg-list-reducer';
import formVisibleReducer from '../../reducers/form-visible-reducer';

let store = createStore(rootReducer);

describe('rootReducer', () => {
  it('should return default state if no action type is recognized', () => {
    expect(rootReducer({}, {type: null})).toEqual({masterKegList: {}, formVisibleOnPage: false});
  })

  it('should check that initial state of kegListReducer matches rootReducer', () => {
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, { type: null }));
  })

  it('should check that initial state of formVisibleReducer matches rootReducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  it('should check that ADD_KEG actions works for kegListReducer and rootReducer', () => {
    const action = {
      type: 'ADD_KEG',
      name: 'a beer',
      brand: 'beer brand',
      price: '$6',
      alcoholContent: '5%',
      remainingStock: 124,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, action));
  })
  
  it('should check that TOGGLE_FORM action works for formVisibleReducer and rootReducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  })
});;