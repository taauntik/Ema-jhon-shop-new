import React, { PureComponent } from "react";

// styles
import {
  AddToCart,
  AttrContainer,
  AttrSelector,
  InfoContainer,
} from "../../ProductDetail.styles";

class ProductInfoContainer extends PureComponent {
  constructor() {
    super();
    this.state = {
      attributesState: [],
    };
  }

  componentDidMount() {
    const length = this.props.product.attributes.length;
    const attrs = this.props.product.attributes.map((attr) =>
      attr.items.map((item) => item)
    );
    let attrsItem = [];
    for (let i = 0; i < length; i++) {
      attrsItem.push(attrs[i][0]);
    }
    console.log("array", attrsItem);
    this.setState({
      attributesState: attrsItem,
    });
  }

  async handleClick(index, item) {
    const array = [...this.state.attributesState];
    array[index] = item;
    console.log("adding del, ", array);
    this.setState({
      attributesState: array,
    });
  }
  render() {
    const { product, price, addToCart } = this.props;
    const { attributes, description, name, prices } = product;
    const { attributesState } = this.state;

    return (
      <InfoContainer>
        <h1>{name}</h1>
        {attributes.map((attr, attrIndex) => (
          <>
            <h4>{attr.name}:</h4>
            <AttrContainer key={attr.id}>
              {attr.items.map((item, index) => {
                console.log(attributesState);
                return (
                  <>
                    {attributesState[0] &&
                    item.id === attributesState[attrIndex].id ? (
                      <AttrSelector
                        style={
                          attr.type === "swatch"
                            ? {
                                backgroundColor: `${item.value}`,
                              }
                            : null
                        }
                        selected={true}
                        type={attr.type}
                      >
                        {attr.type === "swatch" ? "" : item.value}
                      </AttrSelector>
                    ) : (
                      <AttrSelector
                        onClick={() => this.handleClick(attrIndex, item)}
                        style={
                          attr.type === "swatch"
                            ? {
                                backgroundColor: `${item.value}`,
                              }
                            : null
                        }
                      >
                        {attr.type === "swatch" ? "" : item.value}
                      </AttrSelector>
                    )}
                  </>
                );
              })}
            </AttrContainer>
          </>
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
