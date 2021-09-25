import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

// images
import Basket from "../../../../assets/whiteBasket.svg";

// styles
import {
  CardContainer,
  CardImage,
  CardInfo,
  ProductName,
  AddToCartBtn,
  Price,
  PdCard,
  BackgroundImage,
  CardOverlay,
} from "./Card.styles";

// redux
import { addToCart } from "../../../../redux/actions/cartActions";

class Card extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  render() {
    const { name, gallery, prices, inStock, id } = this.props.product;
    const { history } = this.props;

    return (
      <>
        {inStock === true ? (
          <PdCard>
            <CardContainer onClick={() => history.push(`/productDetail/${id}`)}>
              <CardImage className="image" src={gallery[0]} alt="" />
              <CardInfo>
                <ProductName>{name}</ProductName>
                {prices.map(
                  (item) =>
                    item.currency === this.props.price.currency && (
                      <Price>
                        {this.props.price.symbol} {item.amount}
                      </Price>
                    )
                )}
              </CardInfo>
            </CardContainer>
            <AddToCartBtn
              onClick={() => this.props.addToCart(this.props.product)}
              className="btn"
            >
              <img src={Basket} alt="" />
            </AddToCartBtn>
          </PdCard>
        ) : (
          <CardContainer
            style={{ pointerEvents: "none", opacity: 0.7 }}
            onClick={() => history.push(`/productDetail/${id}`)}
          >
            <BackgroundImage img={gallery[0]}>
              <CardOverlay>out of stock</CardOverlay>
            </BackgroundImage>
            <CardInfo>
              <ProductName>{name}</ProductName>
              {prices.map(
                (item) =>
                  item.currency === this.props.price.currency && (
                    <Price>
                      {this.props.price.symbol} {item.amount}
                    </Price>
                  )
              )}
            </CardInfo>
            <AddToCartBtn className="btn">
              <img src={Basket} alt="" />
            </AddToCartBtn>
          </CardContainer>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    price: state.price,
  };
};

const mapDispatchToProps = {
  addToCart: addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Card));
