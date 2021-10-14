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
      attributesState: null,
      attributesArray: [],
    };
  }
  componentDidMount() {
    const { product } = this.props;
    const attrItems = [];
    const setAttributeState = [];
    product.attributes.map((attr) => {
      attrItems.push(attr);
      setAttributeState.push([]);
    });
    this.setState({
      ...this.state,
      attributesArray: attrItems,
      attributesState: setAttributeState,
    });
  }

  async handleClick(index, item, type) {
    const array = [...this.state.attributesState];
    const arr = { type: type, item };
    array[index] = arr;
    this.setState({
      attributesState: array,
    });
  }

  renderAttributes = ({ attributesArray, attributesState }) => (
    <>
      {attributesArray.map((attr, attrIndex) => (
        <>
          <h4>{attr.name}:</h4>
          <AttrContainer key={attr.id}>
            {attr.items?.map((item, index) => {
              return (
                <>
                  {attributesState &&
                  item.id === attributesState[attrIndex].item?.id ? (
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
                      onClick={() =>
                        this.handleClick(attrIndex, item, attr.type)
                      }
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
    </>
  );

  renderPrices({ prices, price }) {
    return (
      <>
        <h4>Prices:</h4>
        {prices.map(
          (item) =>
            item.currency === price.currency && (
              <span key={item.amount} style={{ display: "block" }}>
                {price.symbol} {item.amount}
              </span>
            )
        )}
      </>
    );
  }

  renderInfo() {
    const { product, price, addToCart } = this.props;
    const { description, name, prices } = product;
    const { attributesState, attributesArray } = this.state;

    const newProduct = { ...product };
    let canIAdd = false;

    let three = [];
    attributesState?.map((item) => {
      if (!Array.isArray(item)) {
        if (three.length < attributesState.length) {
          three = [...three, true];
        }
      }
    });

    if (three.length === attributesState?.length) {
      canIAdd = true;
    }
    if (canIAdd === true) {
      newProduct.attributes = attributesState;
    }

    return (
      <>
        <h1>{name}</h1>
        {this.renderAttributes({ attributesArray, attributesState })}
        {this.renderPrices({ price, prices })}
        <AddToCart
          onClick={() => {
            if (canIAdd === true) {
              addToCart(newProduct);
            } else {
              alert("Please select all the attributes");
            }
          }}
        >
          Add To Cart
        </AddToCart>
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
      </>
    );
  }

  render() {
    return <InfoContainer>{this.renderInfo()}</InfoContainer>;
  }
}

export default ProductInfoContainer;
