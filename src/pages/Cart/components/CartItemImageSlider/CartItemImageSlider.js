import React, { PureComponent } from "react";
import LeftArrow from "../../../../assets/leftArrow.svg";
// images
import RightArrow from "../../../../assets/rightArrow.svg";
// styles
import { CartArrowIcon, CartItemImage } from "../../Cart.styles";

class CartItemImageSlider extends PureComponent {
  constructor() {
    super();
    this.state = {
      imageIndex: 0,
    };
  }

  ImageGoesRight = (goesRight) => {
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

  renderCartImageSlider = ({ gallery, imageIndex }) => (
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
  );

  render() {
    const { gallery } = this.props;
    const { imageIndex } = this.state;
    return (
      <>
        {gallery.length > 1 ? (
          this.renderCartImageSlider({ gallery, imageIndex })
        ) : (
          <CartItemImage src={gallery[0]} />
        )}
      </>
    );
  }
}

export default CartItemImageSlider;
