const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const ADD_TO_PRODUCTS = "ADD_TO_PRODUCTS";

const addToCart = (product) => {
  return { type: ADD_TO_CART, product };
};

const removeFromCart = (product) => {
  return { type: REMOVE_FROM_CART, product };
};

const addToProducts = (products) => {
  return { type: ADD_TO_PRODUCTS, products };
};

export {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_PRODUCTS,
  addToProducts,
  addToCart,
  removeFromCart,
};
