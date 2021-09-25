import React, { PureComponent } from "react";

// styles
import { CartArrowIcon, CartItemImage } from "../../Cart.styles";

// images
import RightArrow from "../../../../assets/rightArrow.svg";
import LeftArrow from "../../../../assets/leftArrow.svg";

class CartItemImageSlider extends PureComponent {
  constructor() {
    super();
    this.state = {
      imageIndex: 0,
    };
  }

  ImageGoesRight(goesRight) {
    const { gallery } = this.props;
    const { imageIndex } = this.state;
    const images = gallery.length - 1;
    if (goesRight === true && imageIndex !== images) {
      this.setState({ imageIndex: imageIndex + 1 });
    }
    if (goesRight === false && imageIndex !== 0) {
      this.setState({ imageIndex: imageIndex - 1 });
    }
  }

  render() {
    const { gallery } = this.props;
    const { imageIndex } = this.state;
    return (
      <div>
        {gallery.length > 1 ? (
          <CartItemImage src={gallery[imageIndex]}>
            <CartArrowIcon
              onClick={() => this.ImageGoesRight(false)}
              src={LeftArrow}
              alt=""
            />
            <CartArrowIcon
              onClick={() => this.ImageGoesRight(true)}
              src={RightArrow}
              alt=""
            />
          </CartItemImage>
        ) : (
          <CartItemImage src={gallery[0]} />
        )}
      </div>
    );
  }
}

export default CartItemImageSlider;
