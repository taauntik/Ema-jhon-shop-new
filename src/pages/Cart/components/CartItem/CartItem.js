import React, { Component } from "react";
import styled from "styled-components";
import AddOrRemoveBtn from "../../../components/AddOrRemoveBtn/AddOrRemoveBtn";

class CartItem extends Component {
  render() {
    console.log("Props from the CartItem: ", this.props);
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
            <CartItemImage src={gallery[0]} alt="" />
          </CartItemEnd>
        </CartItemContainer>
        <hr />
      </>
    );
  }
}

const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const CartBtns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const CartItemStart = styled.div``;

const CartItemImage = styled.img`
  width: 150px;
  height: 150px;
  padding: 0 20px;
`;

const CartItemEnd = styled.div`
  display: flex;
`;

export default CartItem;
