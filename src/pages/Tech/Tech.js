import React, { PureComponent } from "react";
import { connect } from "react-redux";

// styles
import { CardContainer } from "../Home/Home.styles";

// components
import { Overlay } from "../components/Overlay/Overlay";
import Card from "../Home/components/Card/Card";

class Tech extends PureComponent {
  render() {
    const categories = this.props.products.categories;

    return (
      <div>
        {this.props.isCartOpen && <Overlay />}
        <CardContainer>
          {categories &&
            categories.map((category) => {
              const products = category.products;
              return products.map(
                (pd) =>
                  pd.category === "tech" && <Card key={pd.id} product={pd} />
              );
            })}
        </CardContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    price: state.price,
    isCartOpen: state.isCartOpen,
  };
};

export default connect(mapStateToProps, null)(Tech);
