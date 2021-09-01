import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { LOAD_PRODUCTS_WITH_ID } from "../../GraphQL/Queries";
import styled from "styled-components";
import { client } from "../../App";
import { addToCart } from "../../redux/actions/cartActions";
import { connect } from "react-redux";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0,
      product: [],
    };
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { match } = this.props;
    const id = match.params.id;
    client
      .query({
        query: LOAD_PRODUCTS_WITH_ID,
        variables: { id },
      })
      .then((res) =>
        this.setState({ ...this.state, product: res.data.product })
      );
  }

  render() {
    console.log(this.state.product);
    const {
      attributes,
      category,
      description,
      gallery,
      inStock,
      name,
      prices,
    } = this.state.product;
    const { addToCart } = this.props;
    console.log(this.state);
    console.log("props: ", this.props);

    return (
      <div>
        {this.state.product.id ? (
          <ProductDetailContainer>
            <ImageContainer>
              <SelectImage>
                {gallery.map((item, index) => (
                  <>
                    {index !== this.state.imageIndex ? (
                      <LittleImage
                        onClick={() => this.setState({ imageIndex: index })}
                        key={index}
                        src={item}
                        alt=""
                      />
                    ) : (
                      <SelectedImage
                        onClick={() => this.setState({ imageIndex: index })}
                        key={index}
                        src={item}
                        alt=""
                      />
                    )}
                  </>
                ))}
              </SelectImage>
              <ProductImage src={gallery[this.state.imageIndex]} alt={name} />
            </ImageContainer>
            <InfoContainer>
              <h1>{name}</h1>
              {attributes.map((attr) => (
                <AttrContainer key={attr.id}>
                  <h4>{attr.name}:</h4>
                  {attr.items.map((item) => (
                    <span style={{ marginRight: "20px" }}>
                      {item.displayValue}
                    </span>
                  ))}
                </AttrContainer>
              ))}
              <h4>Prices:</h4>
              <span style={{ display: "block" }}>${prices[0].amount}</span>
              <AddToCart onClick={() => addToCart(this.state.product)}>
                Add To Cart
              </AddToCart>
              <div dangerouslySetInnerHTML={{ __html: description }}></div>
            </InfoContainer>
          </ProductDetailContainer>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

const ProductDetailContainer = styled.div`
  display: grid;
  grid-column-start: 4;
  grid-column-end: 8;
  grid-gap: 100px;
  flex-direction: row;
  grid-template-columns: 400px 400px;
  justify-content: center;
  overflow-x: hidden;

  @media (max-width: 834px) {
    grid-template-columns: 400px;
    grid-gap: 10px;
  }

  @media (max-width: 470px) {
    grid-template-columns: 200px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ProductImage = styled.img`
  height: 400px;
  width: 400px;
  margin-left: 20px;
`;

const LittleImage = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
  margin-left: 30px;
  cursor: pointer;
  padding: 6px;
  border: 2px solid rgb(213, 219, 219);
  :hover {
    border-color: #0010ed;
  }
`;

const SelectedImage = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
  margin-left: 30px;
  cursor: pointer;
  padding: 6px;
  border: 2px solid #e3db02;
`;

const AttrContainer = styled.div``;

const InfoContainer = styled.div``;
const SelectImage = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddToCart = styled.button`
  padding: 15px 100px;
  margin-top: 30px;
  border: none;
  background-color: #5ece7b;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s;
  :hover {
    background-color: black;
    color: white;
    letter-spacing: 2px;
  }
`;

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  addToCart: addToCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductDetail));
