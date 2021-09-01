import React, { Component } from "react";
import Icon from "../../../assets/navIcon.svg";
import DownArrow from "../../../assets/downArrow.svg";
import UpperArrow from "../../../assets/upperArrow.svg";
import Basket from "../../../assets/basket.svg";
import { Link } from "react-router-dom";

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

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  render() {
    const { isOpen } = this.state;
    const totalItems = this.props.cart.reduce((ack, item) => ack + item.amount, 0);
    return (
      <NavContainer>
        <Navs>
          <SpecialNav>women</SpecialNav>
          <NavItem>men</NavItem>
          <NavItem>kids</NavItem>
        </Navs>
        <NavIcon src={Icon} alt="" />
        <Navs>
          <CurrencyDropDown>
            <option value="2" hidden>
              {isOpen ? (
                <div>
                  <p>$</p>
                  <DownIcon src={UpperArrow} alt="upper" />
                </div>
              ) : (
                <div>
                  <p>$</p>
                  <DownIcon src={DownArrow} alt="down" />
                </div>
              )}
            </option>
            <option value="1">Audi</option>
            <option value="2">BMW</option>
            <option value="3">Citroen</option>
            <option value="4">Ford</option>
          </CurrencyDropDown>
          <div>
            <NavLink to="/cart">
              <Img src={Basket} alt="" />
              {this.props.cart.length ? (
                <CartItemsLength>{totalItems}</CartItemsLength>
              ) : (
                <div></div>
              )}
            </NavLink>
          </div>
        </Navs>
      </NavContainer>
    );
  }
}

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
  };
};

export default connect(mapStateToProps)(Navbar);
