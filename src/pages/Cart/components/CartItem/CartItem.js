import React, { PureComponent } from "react";
// components
import AddOrRemoveBtn from "../../../components/AddOrRemoveBtn/AddOrRemoveBtn";
import { AttrSelector } from "../../../ProductDetail/ProductDetail.styles";
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
import CartItemImageSlider from "../CartItemImageSlider/CartItemImageSlider";

class CartItem extends PureComponent {
  renderCartItemStart = ({
    brand,
    name,
    prices,
    price,
    amount,
    attributes,
  }) => (
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
      <div style={{ display: "flex" }}>
        {attributes.map(({ type, item }) => {
          return (
            <AttrSelector
              style={
                type === "swatch"
                  ? {
                      backgroundColor: `${item.value}`,
                    }
                  : null
              }
              selected={true}
            >
              {type === "swatch" ? "" : item.value}
            </AttrSelector>
          );
        })}
      </div>
    </CartItemStart>
  );

  renderCartItemEnd = ({
    addToCart,
    cart,
    amount,
    gallery,
    removeFromCart,
    id,
  }) => (
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
  );

  renderCartItemContainer = () => {
    const { cart, addToCart, removeFromCart, price } = this.props;
    const { brand, name, prices, gallery, amount, id, attributes } = cart;
    return (
      <CartItemContainer>
        {this.renderCartItemStart({
          brand,
          name,
          prices,
          price,
          amount,
          attributes,
        })}
        {this.renderCartItemEnd({
          addToCart,
          cart,
          amount,
          gallery,
          removeFromCart,
          id,
        })}
      </CartItemContainer>
    );
  };

  render() {
    return (
      <>
        {this.renderCartItemContainer()}
        <hr color="#E5E5E5" />
      </>
    );
  }
}

export default CartItem;
