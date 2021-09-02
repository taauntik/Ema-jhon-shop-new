import React, { Component } from "react";
import Icon from "../../../assets/navIcon.svg";
import DownArrow from "../../../assets/downArrow.svg";
import UpperArrow from "../../../assets/upperArrow.svg";
import Basket from "../../../assets/basket.svg";
import AddOrRemoveBtn from "../AddOrRemoveBtn/AddOrRemoveBtn";

// styles
import {
  NavContainer,
  Navs,
  SpecialNav,
  NavItem,
  NavIcon,
  CurrencyDropDown,
  DownIcon,
  NavLink,
  CartItemsLength,
} from "./Navbar.styles";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  addToCart,
  changeCurrency,
  removeFromCart,
} from "../../../redux/actions/cartActions";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      isCartOpen: false,
    };
  }

  changeCurrencyOfPrice(currency, symbol) {
    this.props.changeCurrency(currency, symbol);
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { isOpen } = this.state;
    const totalItems = this.props.cart.reduce(
      (ack, item) => ack + item.amount,
      0
    );

    const currencies = [
      { currency: "USD", symbol: "$" },
      { currency: "GBP", symbol: "£" },
      { currency: "AUD", symbol: "A$" },
      { currency: "JPY", symbol: "¥" },
      { currency: "RUB", symbol: "₽" },
    ];

    const result = this.props.cart.reduce((ack, pd) => {
      const price = pd.prices.find(
        (item) => item.currency === this.props.price.currency
      );
      console.log("price: ", price);
      return ack + price.amount * pd.amount;
    }, 0);

    console.log("Result :", result);

    console.log("Navbar Props: ", this.props);

    return (
      <NavContainer>
        <Navs>
          <SpecialNav>women</SpecialNav>
          <NavItem>men</NavItem>
          <NavItem>kids</NavItem>
        </Navs>
        <NavIcon src={Icon} alt="" />
        <Navs>
          <CurrencyDropDown
            onClick={() =>
              this.setState({
                isOpen: !this.state.isOpen,
              })
            }
            style={{ marginRight: "20px" }}
          >
            {/* <Currency> */}
            {isOpen === true ? (
              <>
                <p>{this.props.price.symbol}</p>
                <DownIcon src={UpperArrow} alt="upper" />
              </>
            ) : (
              <>
                <p>{this.props.price.symbol}</p>
                <DownIcon src={DownArrow} alt="upper" />
              </>
            )}
            {/* </Currency> */}
          </CurrencyDropDown>
          {isOpen === true && (
            <CurrencyList>
              {currencies.map((item) => (
                <CurrencyListItem
                  key={`${new Date()}${Math.random() * 10000}`}
                  onClick={() =>
                    this.changeCurrencyOfPrice(item.currency, item.symbol)
                  }
                >
                  {item.symbol} {item.currency}
                </CurrencyListItem>
              ))}
            </CurrencyList>
          )}

          <CartNav>
            <NavLink
              onClick={() =>
                this.setState({ isCartOpen: !this.state.isCartOpen })
              }
            >
              <Img src={Basket} alt="" />
              {this.props.cart.length ? (
                <CartItemsLength>{totalItems}</CartItemsLength>
              ) : (
                <div></div>
              )}
            </NavLink>
            {this.state.isCartOpen === true && (
              <Cart>
                <h5>My Bag, {this.props.cart.length} items</h5>
                {this.props.cart.map((item) => (
                  <CartItem>
                    <Info>
                      <h4>{item.name}</h4>
                      {item.prices.map(
                        (newItem) =>
                          newItem.currency === this.props.price.currency && (
                            <p>
                              {this.props.price.symbol}{" "}
                              {(newItem.amount * item.amount).toFixed(2)}
                            </p>
                          )
                      )}
                    </Info>
                    <Image>
                      <Buttons>
                        <AddOrRemoveBtn
                          value="+"
                          verticalPadding={3}
                          horizontalPadding={8}
                          onClick={() => this.props.addToCart(item)}
                        />
                        <span style={{ margin: "5px" }}>{item.amount}</span>
                        <AddOrRemoveBtn
                          value="-"
                          verticalPadding={4}
                          horizontalPadding={10}
                          onClick={() => this.props.removeFromCart(item.id)}
                        />
                      </Buttons>
                      <CartImage src={item.gallery[0]} alt="" />
                    </Image>
                  </CartItem>
                ))}
                <Total>
                  <h4>Total</h4>
                  <p style={{ display: "block" }}>
                    {this.props.price.symbol} {result.toFixed(2)}
                  </p>
                </Total>
                <ViewBag as={Link} to="/cart" type="button">
                  View Bag
                </ViewBag>
              </Cart>
            )}
          </CartNav>
        </Navs>
      </NavContainer>
    );
  }
}

const Currency = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Total = styled.div`
  position: sticky;
  background-color: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ViewBag = styled.button`
  text-transform: uppercase;
  display: block;
  text-align: center;
  text-decoration: none;
  color: black;
  padding: 10px;
  font-size: 15px;
  border: 1px solid #1d1f22;
  background-color: #ffffff;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    background-color: #5ece7b;
    color: white;
    border: none;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Info = styled.div``;
const Image = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CartImage = styled.img`
  width: 100px;
  height: 100px;
`;

const CartNav = styled.div`
  display: flex;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

const Cart = styled.div`
  background-color: white;
  overflow-y: scroll;
  width: 300px;
  max-height: 430px;
  border: 1px solid gray;
  transform: translateY(27px) translateX(-310px);
  scroll-direction: vertical;
  margin: 0;
  padding: 10px 20px;
  position: absolute;
  z-index: 10;
  background-color: white;
`;

const CurrencyListItem = styled.p`
  padding: 7px 10px;
  margin: 0;
  cursor: pointer;
  :hover {
    background-color: #ededed;
  }
`;

const CurrencyList = styled.div`
  position: absolute;
  width: 100px;
  transform: translateY(100px) translateX(-60px);
  background-color: white;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  z-index: 20;
`;

const Select = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const Img = styled.img``;

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    price: state.price,
  };
};

const mapDispatchToProps = {
  addToCart: addToCart,
  removeFromCart: removeFromCart,
  changeCurrency: changeCurrency,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
