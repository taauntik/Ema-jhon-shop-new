import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid transparent;
  width: 16rem;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  background-color: white;

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
  color: #1d1f22;
`;

const AddToCartBtn = styled.div`
  background: #5ece7b;
  padding: 10px 12px;
  border-radius: 52px;
  z-index: 10;
  position: absolute;
  cursor: pointer;
  display: none;
  transform: translateY(-140px) translateX(200px);
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  :hover {
    box-shadow: 0px 4px 35px #c7c7c7;
  }
`;

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

const BackgroundImage = styled.div`
  width: 100%;
  height: 250px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: ${({ img }) => `url(${img})`};
`;

const CardOverlay = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  background-color: white;
  transform: translateY(300) translateX(300);
  opacity: 0.6;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: #8d8f9a;
  font-size: 20px;
`;

export {
  CardContainer,
  CardImage,
  CardImageOverlay,
  ProductName,
  CardInfo,
  AddToCartBtn,
  Price,
  PdCard,
  BackgroundImage,
  CardOverlay,
};
