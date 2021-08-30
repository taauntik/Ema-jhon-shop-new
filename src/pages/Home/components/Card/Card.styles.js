import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid transparent;
  width: 16rem;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  background-color: white;
  margin: 20px 0px;
  &:hover {
    box-shadow: 0px 4px 35px #e8e7e3;
  }

  :hover .btn {
    display: inline-block;
    position: absolute;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 250px;
`;

const CardImageOverlay = styled.div`
  .image::after {
    content: " ";
    width: 100%;
    height: 100%;
    background-color: white;
  }
`;

const ProductName = styled.p`
  color: #1d1f22;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
`;

const CardInfo = styled.div`
  padding-left: 10px;
`;

const Price = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #1D1F22;
`;

const AddToCartBtn = styled.div`
  background: #5ece7b;
  padding: 10px;
  border-radius: 52px;
  display: none;
  transform: translateY(-110px) translateX(200px);
`;

export {
  CardContainer,
  CardImage,
  CardImageOverlay,
  ProductName,
  CardInfo,
  AddToCartBtn,
  Price
};
