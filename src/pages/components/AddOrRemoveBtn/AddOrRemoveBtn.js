import React, { PureComponent } from "react";
import styled from "styled-components";

class AddOrRemoveBtn extends PureComponent {
  render() {
    return (
      <BtnWrapper
        onClick={this.props.onClick}
        style={{
          padding: `${this.props.verticalPadding}px ${this.props.horizontalPadding}px`,
        }}
      >
        {this.props.value}
      </BtnWrapper>
    );
  }
}

const BtnWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  :hover {
    color: white;
    background-color: black;
  }
`;

export default AddOrRemoveBtn;
