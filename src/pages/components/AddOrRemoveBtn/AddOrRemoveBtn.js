import React, { PureComponent } from "react";

// styles
import { BtnWrapper } from "./AddOrRemoveBtn.styles";

// images
import IncrementBtn from "../../../assets/add.svg";
import DecrementBtn from "../../../assets/minus.svg";

class AddOrRemoveBtn extends PureComponent {
  render() {
    const { width, height, size } = this.props;
    return (
      <BtnWrapper
        onClick={this.props.onClick}
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      >
        {this.props.value === "+" ? (
          <img src={IncrementBtn} alt="" width={size} />
        ) : (
          <img src={DecrementBtn} alt="" width={size} />
        )}
      </BtnWrapper>
    );
  }
}

export default AddOrRemoveBtn;
