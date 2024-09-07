// Actions

export const inc = () => ({ type: "INC" });
export const decr = () => ({ type: "DECR" });
export const addItem = (item, quantity) => ({
  type: "add-item",
  payload: { ...item, quantity },
});
export const deleteItem = (id) => ({ type: "delete-item", payload: id });
export const clear = (items) => ({ type: "clear", payload: items });
