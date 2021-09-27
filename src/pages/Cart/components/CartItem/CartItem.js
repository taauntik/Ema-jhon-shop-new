import React, { PureComponent } from "react";

// styles
import {
  BrandText,
  CartBtns,
  CartItemContainer,
  CartItemEnd,
  CartItemStart,
  ItemAmount,
  ItemPrice,
  NameText,
} from "../../Cart.styles";

// components
import AddOrRemoveBtn from "../../../components/AddOrRemoveBtn/AddOrRemoveBtn";
import CartItemImageSlider from "../CartItemImageSlider/CartItemImageSlider";

class CartItem extends PureComponent {
  render() {
    const { cart, addToCart, removeFromCart, price } = this.props;
    const { brand, name, prices, gallery, amount, id } = cart;
    return (
      <>
        <CartItemContainer>
          <CartItemStart>
            <BrandText>{brand}</BrandText>
            <NameText>{name}</NameText>
            {prices.map(
              (item) =>
                item.currency === price.currency && (
                  <ItemPrice>
                    {price.symbol} {(item.amount * amount).toFixed(2)}
                  </ItemPrice>
                )
            )}
          </CartItemStart>
          <CartItemEnd>
            <CartBtns>
              <AddOrRemoveBtn
                value="+"
                width={45}
                height={45}
                size={20}
                onClick={() => addToCart(cart)}
              />
              <ItemAmount>{amount}</ItemAmount>
              <AddOrRemoveBtn
                value="-"
                width={45}
                height={45}
                size={20}
                onClick={() => removeFromCart(id)}
              />
            </CartBtns>
            <CartItemImageSlider gallery={gallery} />
          </CartItemEnd>
        </CartItemContainer>
        <hr color="#E5E5E5" />
      </>
    );
  }
}

export default CartItem;
