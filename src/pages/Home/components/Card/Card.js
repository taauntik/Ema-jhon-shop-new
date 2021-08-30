import React, { Component } from "react";
import Basket from "../../../../assets/whiteBasket.svg";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import {
  CardContainer,
  CardImage,
  CardInfo,
  ProductName,
  AddToCartBtn,
  Price
} from "./Card.styles";

class Card extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  render() {
    const { name, gallery, prices, inStock, id } = this.props.product;
    const { match, location, history } = this.props;

    return (
      <CardContainer onClick={() => history.push(`/productDetail/${id}`)}>
        <CardImage className="image" src={gallery[0]} alt="" />
        <CardInfo>
          <ProductName>{name}</ProductName>
          <Price>${prices[0].amount}</Price>
        </CardInfo>
        <AddToCartBtn className="btn">
          <img src={Basket} alt="" />
        </AddToCartBtn>
      </CardContainer>
    );
  }
}

export default withRouter(Card);
