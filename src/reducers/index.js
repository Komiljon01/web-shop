// Reducer

const initialState = {
  counter: 0,
  quantity: 0,
  totalQuantity: 0,
  totalPrice: 0,
  cards: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECR":
      return {
        ...state,
        counter: state.counter > 0 ? state.counter - 1 : state.counter,
      };
    case "add-item": {
      const newProduct = action.payload;

      const existingProduct = state.cards.find(
        (product) => product.id === newProduct.id
      );

      let updatedCards;

      if (existingProduct) {
        updatedCards = state.cards.map((product) =>
          product.id === newProduct.id
            ? { ...product, quantity: +product.quantity + +newProduct.quantity }
            : product
        );
      } else {
        updatedCards = [...state.cards, newProduct];
      }

      const totalQuantity = updatedCards.reduce(
        (sum, product) => sum + +product.quantity,
        0
      );
      const totalPrice = updatedCards.reduce(
        (sum, product) => sum + +product.price * +product.quantity,
        0
      );

      return {
        ...state,
        cards: updatedCards,
        totalQuantity,
        totalPrice,
      };
    }
    default:
      return state;
  }
};
