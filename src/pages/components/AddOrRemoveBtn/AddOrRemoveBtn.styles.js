import styled from "styled-components";

export const BtnWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    color: white;
    background-color: #5ece7b;
    border: 1px solid #5ece7b;
  }
`;
