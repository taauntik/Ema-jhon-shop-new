import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

// images
import Basket from "../../../../assets/whiteBasket.svg";

// redux
import { addToCart } from "../../../../redux/actions/cartActions";

// styles
import {
  AddToCartBtn,
  BackgroundImage,
  CardContainer,
  CardImage,
  CardInfo,
  CardOverlay,
  PdCard,
  Price,
  ProductName,
} from "./Card.styles";

class Card extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  renderActiveCardContainer() {
    const { name, gallery, prices, id } = this.props.product;
    const { history, price } = this.props;
    return (
      <CardContainer onClick={() => history.push(`/productDetail/${id}`)}>
        <CardImage className="image" src={gallery[0]} alt="" />
        <CardInfo>
          <ProductName>{name}</ProductName>
          {prices.map(
            (item) =>
              item.currency === this.props.price.currency && (
                <Price>
                  {price.symbol} {item.amount}
                </Price>
              )
          )}
        </CardInfo>
        <AddToCartBtn className="btn">
          <img src={Basket} alt="" />
        </AddToCartBtn>
      </CardContainer>
    );
  }

  renderDisabledCardContainer() {
    const { name, gallery, prices } = this.props.product;
    const { price } = this.props;
    return (
      <CardContainer style={{ pointerEvents: "none", opacity: 0.7 }}>
        <BackgroundImage img={gallery[0]}>
          <CardOverlay>out of stock</CardOverlay>
        </BackgroundImage>
        <CardInfo>
          <ProductName>{name}</ProductName>
          {prices.map(
            (item) =>
              item.currency === price.currency && (
                <Price>
                  {price.symbol} {item.amount}
                </Price>
              )
          )}
        </CardInfo>
      </CardContainer>
    );
  }

  renderPdCard() {
    const { product, addToCart } = this.props;
    return <PdCard>{this.renderActiveCardContainer()}</PdCard>;
  }

  render() {
    const { inStock } = this.props.product;

    return (
      <>
        {inStock === true
          ? this.renderPdCard()
          : this.renderDisabledCardContainer()}
      </>
    );
  }
}

const mapStateToProps = ({ cart, price }) => ({ cart, price });

const mapDispatchToProps = {
  addToCart: addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Card));
