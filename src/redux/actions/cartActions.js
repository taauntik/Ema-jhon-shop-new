const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const ADD_TO_PRODUCTS = "ADD_TO_PRODUCTS";
// const ADJUST_QTY = "ADJUST_QTY";

const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: productId,
    },
  };
};

// const adjustQty = (productId, value) => {
//   return {
//     type: ADJUST_QTY,
//     payload: {
//       id: productId,
//       qty: value,
//     },
//   };
// };

const addToProducts = (products) => {
  return { type: ADD_TO_PRODUCTS, products };
};

export {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_PRODUCTS,
  // ADJUST_QTY,
  addToProducts,
  addToCart,
  removeFromCart,
  // adjustQty,
};
