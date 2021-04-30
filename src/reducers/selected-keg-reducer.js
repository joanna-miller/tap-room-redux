export default (state = {}, action) => {
  const { id, type, ...payload } = action;
  switch(action.type) {
    case 'SELECT_KEG':
      return Object.assign({}, state, {
        ...payload, 
        id: id 
      });
    case 'UNSELECT_KEG':
      return state = {};
    default: 
      return state;
  }
}