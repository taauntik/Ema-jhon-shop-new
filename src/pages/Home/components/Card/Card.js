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
  Price,
} from "./Card.styles";
import { connect } from "react-redux";
import styled from "styled-components";
import { addToCart } from "../../../../redux/actions/cartActions";

class Card extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  render() {
    const { name, gallery, prices, inStock, id } = this.props.product;
    const { match, location, history } = this.props;
    console.log(this.props);

    const backgroundImage = {
      width: "100%",
      height: "250px",
      backgroundPosition: "center",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${gallery[0]})`,
    };

    const overlay = {
      position: "absolute",
      width: "250px",
      height: "250px",
      backgroundColor: "white",
      transform: "translateY(300) translateX(300)",
      opacity: 0.6,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textTransform: "uppercase",
      color: "#8D8F9A",
      fontSize: "20px",
    };

    return (
      <>
        {inStock === true ? (
          <PdCard>
            <CardContainer onClick={() => history.push(`/productDetail/${id}`)}>
              <CardImage className="image" src={gallery[0]} alt="" />
              {/* <div style={backgroundImage}>
              <div style={overlay}>out of stock</div>
            </div> */}
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
            {/* <CardImage className="image" src={gallery[0]} alt="" /> */}
            <div style={backgroundImage}>
              <div style={overlay}>out of stock</div>
            </div>
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

const PdCard = styled.div`
  margin: 20px 0px;
  :hover .btn {
    display: block;
    position: absolute;
  }
  :hover {
    box-shadow: 0px 4px 35px #e8e7e3;
  }
`;

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
