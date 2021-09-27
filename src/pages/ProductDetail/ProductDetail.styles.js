import styled from "styled-components";

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AttrSelector = styled.div`
  margin-right: 20px;
  border: 1px solid #1d1f22;
  width: 63px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;
  background-color: ${({ selected }) => (selected ? "#1d1f22" : "white")};
  color: ${({ selected }) => (selected ? "white" : "#1D1F22")};
  ${({ selected, type }) =>
    selected === true && type === "swatch"
      ? `
      border: 2px solid red;
      padding: 6px;
  `
      : null}
  :hover {
    background-color: #1d1f22;
    color: white;
  }
`;

export const ProductDetailWrapper = styled.div`
  display: grid;
  max-width: 1440px;
  width: 100vw;
  grid-column-start: 4;
  grid-column-end: 8;
  grid-gap: 100px;
  flex-direction: row;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  overflow-x: hidden;

  @media (max-width: 834px) {
    grid-template-columns: 400px;
    grid-gap: 10px;
  }

  @media (max-width: 470px) {
    grid-template-columns: 200px;
  }
`;

export const ImagesWrapper = styled.div`
  display: flex;
`;

export const ProductImage = styled.img`
  height: 500px;
  width: 100%;
  margin-left: 20px;
`;

export const LittleImage = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
  margin-left: 50px;
  cursor: pointer;
  padding: 6px;
  border: 2px solid rgb(213, 219, 219);
  :hover {
    border-color: #0010ed;
  }
`;

export const SelectedImage = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
  margin-left: 50px;
  cursor: pointer;
  padding: 6px;
  border: 2px solid #e3db02;
`;

export const AttrContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.div``;
export const SelectImage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddToCart = styled.button`
  padding: 15px 100px;
  margin-top: 30px;
  border: none;
  background-color: #5ece7b;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s;
  :hover {
    background-color: black;
    color: white;
    letter-spacing: 2px;
  }
`;
