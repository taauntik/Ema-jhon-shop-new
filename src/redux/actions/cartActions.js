const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const ADD_TO_PRODUCTS = "ADD_TO_PRODUCTS";
const CHANGE_CURRENCY = "CHANGE_CURRENCY";
const SET_IS_CURRENCY_OPEN = "SET_IS_CURRENCY_OPEN";
const SET_IS_CART_OPEN = "SET_IS_CART_OPEN";

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

const addToProducts = (products) => {
  return { type: ADD_TO_PRODUCTS, products };
};

const changeCurrency = (currency, symbol) => {
  return {
    type: CHANGE_CURRENCY,
    payload: {
      currency: currency,
      symbol: symbol,
    },
  };
};

const setIsCurrencyOpen = (bool) => {
  return {
    type: SET_IS_CURRENCY_OPEN,
    payload: bool,
  };
};

const setIsCartOpen = (bool) => {
  return {
    type: SET_IS_CART_OPEN,
    payload: bool,
  };
};

export {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_PRODUCTS,
  CHANGE_CURRENCY,
  SET_IS_CURRENCY_OPEN,
  SET_IS_CART_OPEN,
  addToProducts,
  addToCart,
  removeFromCart,
  changeCurrency,
  setIsCurrencyOpen,
  setIsCartOpen,
};
