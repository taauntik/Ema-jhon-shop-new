import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import CartItem from "./components/CartItem/CartItem";

class Cart extends Component {
  render() {
    console.log(this.props);
    const { cart, addToCart, removeFromCart, price } = this.props;
    return (
      <CartContainer>
        <h1>CART</h1>
        <hr color="lightgray" />
        {cart.map((cartItem) => (
          <CartItem
            key={cartItem.cartId}
            cart={cartItem}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            price={price}
          />
        ))}
      </CartContainer>
    );
  }
}

const CartContainer = styled.div`
  margin: 0px 60px;
`;

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    price: state.price,
  };
};

const mapDispatchToProps = {
  addToCart: addToCart,
  removeFromCart: removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
