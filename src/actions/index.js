// Actions

export const inc = (id) => ({ type: "INC", payload: id });
export const decr = (id) => ({ type: "DECR", payload: id });
export const updateQuantity = ({ id, quantity }) => ({
  type: "UPDATE_QUANTITY",
  payload: { id, quantity },
});
export const addItem = (item, quantity) => ({
  type: "add-item",
  payload: { ...item, quantity: +quantity },
});
export const deleteItem = (id) => ({ type: "delete-item", payload: id });
export const clear = (items) => ({ type: "clear", payload: items });
export const cancelOrders = () => ({ type: "cancel-orders" });
