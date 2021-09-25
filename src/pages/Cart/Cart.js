import React, { PureComponent } from "react";
import { connect } from "react-redux";

// redux
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";

// styles
import { CartContainer } from "./Cart.styles";

// components
import CartItem from "./components/CartItem/CartItem";
import { Overlay } from "../components/Overlay/Overlay";

class Cart extends PureComponent {
  render() {
    const { cart, addToCart, removeFromCart, price, isCartOpen } = this.props;
    return (
      <div>
        {isCartOpen && <Overlay />}
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    price: state.price,
    isCartOpen: state.isCartOpen,
  };
};

const mapDispatchToProps = {
  addToCart: addToCart,
  removeFromCart: removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
