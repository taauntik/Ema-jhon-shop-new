import React, { PureComponent } from "react";

// styles
import {
  AddToCart,
  AttrContainer,
  InfoContainer,
} from "../../ProductDetail.styles";

class ProductInfoContainer extends PureComponent {
  render() {
    const { product, price, addToCart } = this.props;
    const { attributes, description, name, prices } = product;

    return (
      <InfoContainer>
        <h1>{name}</h1>
        {attributes.map((attr) => (
          <AttrContainer key={attr.id}>
            <h4>{attr.name}:</h4>
            {attr.items.map((item, index) => (
              <span
                key={`${index} ${new Date().getTime()}`}
                style={{ marginRight: "20px" }}
              >
                {item.displayValue}
              </span>
            ))}
          </AttrContainer>
        ))}
        <h4>Prices:</h4>
        {prices.map(
          (item) =>
            item.currency === price.currency && (
              <span key={item.amount} style={{ display: "block" }}>
                {price.symbol} {item.amount}
              </span>
            )
        )}

        <AddToCart onClick={() => addToCart(product)}>Add To Cart</AddToCart>
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
      </InfoContainer>
    );
  }
}

export default ProductInfoContainer;
