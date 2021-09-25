import React, { PureComponent } from "react";
import {
  ImagesWrapper,
  LittleImage,
  ProductImage,
  SelectedImage,
  SelectImage,
} from "../../ProductDetail.styles";

class ImageContainer extends PureComponent {
  constructor() {
    super();
    this.state = {
      imageIndex: 0,
    };
  }

  render() {
    const { gallery, name } = this.props;
    const { imageIndex } = this.state;
    return (
      <ImagesWrapper>
        <SelectImage>
          {gallery.map((item, index) => (
            <div key={index}>
              {index !== imageIndex ? (
                <LittleImage
                  onClick={() => this.setState({ imageIndex: index })}
                  src={item}
                  alt=""
                />
              ) : (
                <SelectedImage
                  onClick={() => this.setState({ imageIndex: index })}
                  src={item}
                  alt=""
                />
              )}
            </div>
          ))}
        </SelectImage>
        <ProductImage src={gallery[this.state.imageIndex]} alt={name} />
      </ImagesWrapper>
    );
  }
}

export default ImageContainer;
