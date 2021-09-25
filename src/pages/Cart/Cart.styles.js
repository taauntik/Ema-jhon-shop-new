import styled from "styled-components";

export const CartContainer = styled.div`
  margin: 0px 60px;
`;

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
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
