import React, { PureComponent } from "react";

// styles
import { BtnWrapper } from "./AddOrRemoveBtn.styles";

// images
import IncrementBtn from "../../../assets/add.svg";
import DecrementBtn from "../../../assets/minus.svg";

class AddOrRemoveBtn extends PureComponent {
  render() {
    return (
      <BtnWrapper
        onClick={this.props.onClick}
        style={{
          padding: "10px",
        }}
      >
        {this.props.value === "+" ? (
          <img src={IncrementBtn} alt="" width="12" />
        ) : (
          <img src={DecrementBtn} alt="" width="12" />
        )}
      </BtnWrapper>
    );
  }
}

export default AddOrRemoveBtn;
