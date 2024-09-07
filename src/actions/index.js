// Actions

export const inc = (id) => ({ type: "INC", payload: id });
export const decr = (id) => ({ type: "DECR", payload: id });
export const updateQuantity = ({ id, quantity }) => ({
  type: "UPDATE_QUANTITY",
  payload: { id, quantity },
});
export const addItem = (item, quantity) => ({
  type: "ADD_ITEM",
  payload: { ...item, quantity: +quantity },
});
export const deleteItem = (id) => ({ type: "DELETE_ITEM", payload: id });
export const clear = (items) => ({ type: "CLEAR", payload: items });
export const cancelOrders = () => ({ type: "CANCEL_ORDERS" });
