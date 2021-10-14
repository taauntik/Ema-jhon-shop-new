import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { client } from "../../App";

// graphql & apollo
import { LOAD_PRODUCTS_WITH_ID } from "../../GraphQL/Queries";

// redux
import { addToCart } from "../../redux/actions/cartActions";

// components
import { Overlay } from "../components/Overlay/Overlay";
import ImageContainer from "./components/ImageContainer/ImageContainer";
import ProductInfoContainer from "./components/ProductInfoContainer/ProductInfoContainer";

// styles
import { Center, ProductDetailWrapper } from "./ProductDetail.styles";

class ProductDetail extends PureComponent {
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

  renderProductDetailWrapper = ({
    gallery,
    name,
    price,
    product,
    addToCart,
  }) => (
    <ProductDetailWrapper>
      <ImageContainer gallery={gallery} name={name} />
      <ProductInfoContainer
        addToCart={addToCart}
        price={price}
        name={name}
        product={product}
      />
    </ProductDetailWrapper>
  );

  render() {
    const { product } = this.state;
    const { gallery, name } = product;
    const { addToCart, isCartOpen, price } = this.props;

    return (
      <>
        {isCartOpen && <Overlay />}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Center>
            {product.id ? (
              this.renderProductDetailWrapper({
                gallery,
                name,
                addToCart,
                price,
                product,
              })
            ) : (
              <div></div>
            )}
          </Center>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ cart, price, isCartOpen }) => ({
  cart,
  price,
  isCartOpen,
});

const mapDispatchToProps = {
  addToCart: addToCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductDetail));
