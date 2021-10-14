import styled from "styled-components";

const Heading = styled.h1`
  font-weight: 100;
  margin-top: 20px;
`;

const Container = styled.div`
  margin: 20px 30px;
  max-width: 1440px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Search = styled.input`
  border: 1px solid gray;
  border-radius: 5px;
  height: 30px;
  width: 100%;
  padding: 2px 30px;
  font-size: 18px;
  outline: 0;
  background-color: #f5f5f5;
  :hover,
  :focus {
    border: 1.5px solid #009688;
    background-color: white;
  }
`;

export const ClearIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 8px;
  width: 18px;
  cursor: pointer;
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 10px;
  left: 8px;
  width: 18px;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  min-width: 100px;
`;

export { Heading, Container, CardContainer };
