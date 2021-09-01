import {
  ADD_TO_CART,
  ADD_TO_PRODUCTS,
  // ADJUST_QTY,
  REMOVE_FROM_CART,
} from "../actions/cartActions";

const initialState = {
  cart: [],
  products: [],
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
      // const product = action.product;
      // const remainingCart = state.cart.filter(
      //   (item) => item.cartId !== product.cartId
      // );
      // return { ...state, cart: remainingCart };
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

    case ADD_TO_PRODUCTS:
      //   console.log("action ", action);
      return { ...state, products: action.products };

    // case ADJUST_QTY:
    //   return {
    //     ...state,
    //     cart: state.cart.map((item) =>
    //       item.id === action.payload.id
    //         ? { ...item, qty: action.payload.qty }
    //         : item
    //     ),
    //   };

    default:
      return { ...state };
  }
};

export default cartReducers;
