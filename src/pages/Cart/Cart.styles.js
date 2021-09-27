import styled from "styled-components";

export const CartContainer = styled.div`
  margin: 0px 60px;
  font-family: Raleway, sans-serif;
`;

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemAmount = styled.span`
  margin: 5;
  font-size: 24px;
  font-weight: 500;
`;

export const BrandText = styled.p`
  color: #1d1f22;
  font-weight: 600;
  font-size: 30px;
  line-height: 27px;
`;

export const ItemPrice = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 18px;
`;

export const NameText = styled.p`
  font-size: 30px;
  color: #1d1f22;
  font-weight: 400;
`;

export const CartBtns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const CartItemStart = styled.div``;

export const CartItemImage = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 141px;
  height: 185px;
  padding: 0 20px;
  margin-left: 27px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartArrowIcon = styled.img`
  cursor: pointer;
`;

export const CartItemEnd = styled.div`
  display: flex;
`;
