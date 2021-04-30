import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { id, type, ...payload } = action;
  switch(action.type) {
    case c.SELECT_KEG:
      return Object.assign({}, state, {
        ...payload, 
        id: id 
      });
    case c.UNSELECT_KEG:
      return state = {};
    default: 
      return state;
  }
}