import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";

// graphql & apollo
import { LOAD_PRODUCTS_WITH_ID } from "../../GraphQL/Queries";
import { client } from "../../App";

// styles
import { Center, ProductDetailWrapper } from "./ProductDetail.styles";

// redux
import { addToCart } from "../../redux/actions/cartActions";

// components
import { Overlay } from "../components/Overlay/Overlay";
import ProductInfoContainer from "./components/ProductInfoContainer/ProductInfoContainer";
import ImageContainer from "./components/ImageContainer/ImageContainer";

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

  render() {
    const { gallery, name } = this.state.product;
    const { addToCart, isCartOpen, price } = this.props;

    return (
      <div>
        {isCartOpen && <Overlay />}
        <Center>
          {this.state.product.id ? (
            <ProductDetailWrapper>
              <ImageContainer gallery={gallery} name={name} />
              <ProductInfoContainer
                addToCart={addToCart}
                price={price}
                name={name}
                product={this.state.product}
              />
            </ProductDetailWrapper>
          ) : (
            <div></div>
          )}
        </Center>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    price: state.price,
    isCartOpen: state.isCartOpen,
  };
};

const mapDispatchToProps = {
  addToCart: addToCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductDetail));
