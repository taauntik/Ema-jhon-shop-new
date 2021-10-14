import React, { PureComponent } from "react";
import { connect } from "react-redux";
// redux
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import { Overlay } from "../components/Overlay/Overlay";
// styles
import { CartContainer } from "./Cart.styles";
// components
import CartItem from "./components/CartItem/CartItem";

class Cart extends PureComponent {
  render() {
    const { cart, addToCart, removeFromCart, price, isCartOpen } = this.props;
    return (
      <div>
        {isCartOpen && <Overlay />}
        <div style={{ display: "flex", justifyContent: "center" }}>
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
      </div>
    );
  }
}

const mapStateToProps = ({ cart, price, isCartOpen }) => ({
  cart,
  price,
  isCartOpen,
});

const mapDispatchToProps = {
  addToCart: addToCart,
  removeFromCart: removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
