export const deleteKeg = id => ({ type: 'DELETE_KEG', id });
export const toggleForm = () => ({ type: 'TOGGLE_FORM'});
export const addKeg = (keg) => {
  const { name, brand, price, alcoholContent, remainingStock, id } = keg;
  return {
    type: "ADD_KEG",
    name: name,
    brand: brand,
    price: price,
    alcoholContent: alcoholContent,
    remainingStock: remainingStock,
    id: id
  }
}
export const selectKeg = (keg) => {
  const { name, brand, price, alcoholContent, remainingStock, id } = keg;
  return {
    type: "SELECT_KEG",
    name: name,
    brand: brand,
    price: price,
    alcoholContent: alcoholContent,
    remainingStock: remainingStock,
    id: id
  }
}
export const unselectKeg = () => {
  return {
    type: "UNSELECT_KEG"
  }
}