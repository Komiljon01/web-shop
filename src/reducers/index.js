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
        cards: state.cards.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
        totalQuantity: state.totalQuantity + 1,
        totalPrice:
          state.totalPrice +
          state.cards.find((product) => product.id === action.payload).price,
      };
    case "DECR":
      return {
        ...state,
        cards: state.cards.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
        totalQuantity: state.totalQuantity - 1,
        totalPrice:
          state.totalPrice -
          state.cards.find((product) => product.id === action.payload).price,
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cards: state.cards.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: action.payload.quantity }
            : product
        ),
        totalQuantity: state.cards.reduce(
          (acc, product) =>
            product.id === action.payload.id
              ? acc + (action.payload.quantity - product.quantity)
              : acc,
          state.totalQuantity
        ),
        totalPrice: state.cards.reduce(
          (acc, product) =>
            product.id === action.payload.id
              ? acc +
                (action.payload.quantity * product.price -
                  product.quantity * product.price)
              : acc,
          state.totalPrice
        ),
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
            ? { ...product, quantity: product.quantity + newProduct.quantity }
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
        (sum, product) => sum + product.price * product.quantity,
        0
      );

      return {
        ...state,
        cards: updatedCards,
        totalQuantity,
        totalPrice,
      };
    }
    case "delete-item":
      const deletedItem = state.cards.find(
        (item) => item.id === action.payload
      );
      return {
        ...state,
        cards: state.cards.filter((item) => item.id !== action.payload),
        totalQuantity: state.totalQuantity - deletedItem.quantity,
        totalPrice: state.totalPrice - deletedItem.quantity * deletedItem.price,
      };
    case "cancel-orders":
      return { ...state, cards: [], totalQuantity: 0, totalPrice: 0 };
    default:
      return state;
  }
};
