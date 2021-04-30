import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { id, type, ...payload } = action;
  switch(action.type) {
    case c.ADD_KEG:
      return Object.assign({}, state, {
        [id] : { ...payload, id: id }
      });
    case c.DELETE_KEG:
      let newState = { ...state };
      delete newState[id];
      return newState;
  default:
    return state;
  }
};