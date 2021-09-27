import React, { PureComponent } from "react";
import { AttrSelector } from "../../ProductDetail/ProductDetail.styles";

class AttributeSelector extends PureComponent {
  constructor() {
    super();
    this.state = {
      attribute: "",
    };
  }
  render() {
    const { value } = this.props;
    console.log("value", value);
    return (
      <AttrSelector
        selected={this.state.attribute === value}
        onClick={this.setState({ attribute: value })}
      >
        {value}
      </AttrSelector>
    );
  }
}

export default AttributeSelector;
