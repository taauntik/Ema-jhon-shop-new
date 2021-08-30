import {
  ADD_TO_CART,
  ADD_TO_PRODUCTS,
  REMOVE_FROM_CART,
} from "../actions/cartActions";

const initialState = {
  cart: [],
  products: [],
};

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newProduct = {
        product: action.product,
        cartId: state.cart.length + 1,
      };
      const newCart = [...state.cart, newProduct];
      return { ...state, cart: newCart };

    case REMOVE_FROM_CART:
      const product = action.product;
      const remainingCart = state.cart.filter(
        (item) => item.cartId !== product.cartId
      );
      return { ...state, cart: remainingCart };

    case ADD_TO_PRODUCTS:
      //   console.log("action ", action);
      return { ...state, products: action.products };

    default:
      return state;
  }
};

export default cartReducers;
