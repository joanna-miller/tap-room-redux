export default (state = {}, action) => {
  const { id, type, ...payload } = action;
  switch(action.type) {
    case 'ADD_KEG':
      return Object.assign({}, state, {
        [id] : { ...payload, id: id }
      });
  default:
    return state;
  }
};