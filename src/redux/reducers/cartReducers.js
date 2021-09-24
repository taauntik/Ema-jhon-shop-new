import {
  ADD_TO_CART,
  ADD_TO_PRODUCTS,
  CHANGE_CURRENCY,
  REMOVE_FROM_CART,
  SET_IS_CURRENCY_OPEN,
  SET_IS_CART_OPEN,
} from "../actions/cartActions";

const initialState = {
  cart: [],
  products: [],
  price: { currency: "USD", symbol: "$" },
  isCurrencyOpen: false,
  isCartOpen: false,
};

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const isItemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );

      return {
        ...state,
        cart: isItemInCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, amount: item.amount + 1 }
                : item
            )
          : [...state.cart, { ...action.payload, amount: 1 }],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.reduce((ack, item) => {
          if (item.id === action.payload.id) {
            if (item.amount === 1) return ack;
            return [...ack, { ...item, amount: item.amount - 1 }];
          } else {
            return [...ack, item];
          }
        }, []),
      };

    case CHANGE_CURRENCY:
      return {
        ...state,
        price: {
          currency: action.payload.currency,
          symbol: action.payload.symbol,
        },
      };

    case ADD_TO_PRODUCTS:
      return { ...state, products: action.products };

    case SET_IS_CURRENCY_OPEN:
      return { ...state, isCurrencyOpen: action.payload };

    case SET_IS_CART_OPEN:
      return { ...state, isCartOpen: action.payload };

    default:
      return { ...state };
  }
};

export default cartReducers;
