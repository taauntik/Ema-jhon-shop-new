import React, { PureComponent } from "react";

// styles
import {
  CartBtns,
  CartItemContainer,
  CartItemEnd,
  CartItemStart,
} from "../../Cart.styles";

// components
import AddOrRemoveBtn from "../../../components/AddOrRemoveBtn/AddOrRemoveBtn";
import CartItemImageSlider from "../CartItemImageSlider/CartItemImageSlider";

class CartItem extends PureComponent {
  render() {
    const { cart, addToCart, removeFromCart, price } = this.props;
    const { name, prices, gallery, amount, id } = cart;
    return (
      <>
        <CartItemContainer>
          <CartItemStart>
            <h3>{name}</h3>
            {prices.map(
              (item) =>
                item.currency === price.currency && (
                  <p>
                    {price.symbol} {(item.amount * amount).toFixed(2)}
                  </p>
                )
            )}
          </CartItemStart>
          <CartItemEnd>
            <CartBtns>
              <AddOrRemoveBtn
                value="+"
                verticalPadding={5}
                horizontalPadding={10}
                onClick={() => addToCart(cart)}
              />
              <span>{amount}</span>
              <AddOrRemoveBtn
                value="-"
                verticalPadding={5}
                horizontalPadding={12}
                onClick={() => removeFromCart(id)}
              />
            </CartBtns>
            <CartItemImageSlider gallery={gallery} />
          </CartItemEnd>
        </CartItemContainer>
        <hr />
      </>
    );
  }
}

export default CartItem;
