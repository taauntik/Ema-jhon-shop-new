import React, { PureComponent } from "react";

// styles
import { BtnWrapper } from "./AddOrRemoveBtn.styles";

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

export default AddOrRemoveBtn;
