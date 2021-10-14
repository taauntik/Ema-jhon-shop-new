import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.div`
  top: 0;
  left: 0;
  right: 0;
  border: 1px solid transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin: 0;
  height: 60px;
  z-index: 100;
  position: sticky;
  background-color: white;
  transition: 0.2s;
  box-shadow: ${({ sticky }) =>
    sticky && "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);"};
`;

export const MiniCartCaption = styled.div`
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 25px;
  margin-left: 10px;
`;

export const BoldMiniCartCaption = styled.span`
  font-weight: bold;
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

export const CurrencyText = styled.p`
  margin-right: 5px;
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

export const NavLink = styled.div`
  text-decoration: none;
  color: black;
  cursor: pointer;
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

export const CurrencyDropDown = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10px;
  border-radius: 6px;
  padding: 10px;
  cursor: pointer;
  margin-right: 10px;
  background-color: white;
  outline: none;
  border: none;
  margin-right: 20px;

  :hover {
    background-color: #ededed;
  }
`;

export const DisableLinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const Total = styled.div`
  position: sticky;
  background-color: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 10px;
`;

export const ViewBag = styled.button`
  text-transform: uppercase;
  display: block;
  text-align: center;
  text-decoration: none;
  color: black;
  padding: 16px 32px;
  font-size: 15px;
  border: 1px solid #1d1f22;
  background-color: #ffffff;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    background-color: #5ece7b;
    color: white;
    border: 1px solid #5ece7b;
  }
`;

export const CheckoutBtn = styled.button`
  text-transform: uppercase;
  display: block;
  text-align: center;
  text-decoration: none;
  color: white;
  padding: 16px 32px;
  font-size: 15px;
  border: none;
  background-color: #5ece7b;
  transition: 0.2s;
  cursor: pointer;
  border: 1px solid #5ece7b;
  margin-left: 10px;
  :hover {
    background-color: #ffffff;
    color: black;
    border: 1px solid #1d1f22;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  margin-top: 15px;
  margin: 0px 5px;
  margin-left: 5px;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 6px;
`;

export const Info = styled.div``;
export const Image = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CartImage = styled.img`
  width: 105px;
  height: 137px;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CartNav = styled.div`
  display: flex;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 293px;
  height: 137px;
  margin: 20px 0px;
`;

export const CartPdName = styled.p`
  font-size: 16px;
  font-weight: 300;
`;

export const CartPdPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const Cart = styled.div`
  background-color: white;
  overflow-y: scroll;
  width: 330px;
  max-height: 540px;
  transform: translateY(45px) translateX(-305px);
  margin: 0;
  position: absolute;
  z-index: 10;
  background-color: white;
  ::-webkit-scrollbar {
    width: 10px;
  }
`;

export const CurrencyListItem = styled.p`
  padding: 7px 10px;
  margin: 0;
  cursor: pointer;
  :hover {
    background-color: #ededed;
  }
`;

export const CurrencyList = styled.div`
  position: absolute;
  width: 100px;
  transform: translateY(100px) translateX(-60px);
  background-color: white;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  z-index: 20;
`;

export const Img = styled.img``;
