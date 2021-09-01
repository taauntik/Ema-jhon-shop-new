import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  top: 0;
  left: 0;
  right: 0;
  border: 1px solid transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 100px;
`;

export const Navs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavItem = styled.p`
  color: --c-text;
  margin-left: 20px;
  text-transform: uppercase;
  font-weight: 200;
  font-size: 15px;
  cursor: pointer;
  transition: 0.2s;
  position: relative;
  padding-bottom: 14px;
  &:hover {
    color: #5ece7b;
  }
`;

export const SpecialNav = styled.p`
  color: --c-text;
  margin-left: 20px;
  text-transform: uppercase;
  font-weight: 200;
  font-size: 15px;
  cursor: pointer;
  transition: 0.2s;
  position: relative;
  padding-bottom: 14px;
  &:hover {
    color: #5ece7b;
  }
  ::after {
    content: "";
    width: 120%;
    height: 2px;
    background: #5ece7b;
    position: absolute;
    left: -10%;
    bottom: 0;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const CartItemsLength = styled.div`
  font-size: 12px;
  background: #000000;
  color: #fff;
  padding: 2px 5px;
  font-weight: bold;
  position: absolute;
  border-radius: 55px;
  z-index: 20;
  transform: translate(10px, -30px);
`;



export const NavIcon = styled.img``;

export const DownIcon = styled.img`
  margin-left: 5;
`;

export const CurrencyDropDown = styled.select`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 6px;
  padding: 10px;
  cursor: pointer;
  margin-right: 10px;
  background-color: white;
  outline: none;
  border: none;

  &:hover {
    background-color: lightgray;
  }

  &:focus {
    outline: 0;
  }

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 10px;
    border: none;
  }
`;
