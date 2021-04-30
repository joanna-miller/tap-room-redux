// export default (state = null, action) => {
//   const { id, type, ...payload } = action;
//   switch(action.type) {
//     case 'SELECT_KEG':
//       const newState = { ...state }
//       let selectedKeg = { ...newState[id] }
//       return selectedKeg;
//     case 'UNSELECT_KEG':
//       let unselectedKeg = null;
//       return unselectedKeg;
//     default: 
//       return state;
//   }
// }