import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import CartItem from "./components/CartItem/CartItem";

class Cart extends Component {
  render() {
    console.log(this.props);
    const { cart, addToCart, removeFromCart } = this.props;
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
  };
};

const mapDispatchToProps = {
  addToCart: addToCart,
  removeFromCart: removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
