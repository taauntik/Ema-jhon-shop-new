import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Overlay } from "../components/Overlay/Overlay";
// components
import Card from "../Home/components/Card/Card";
// styles
import { CardContainer } from "../Home/Home.styles";

class Clothes extends PureComponent {
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
                  pd.category === "clothes" && <Card key={pd.id} product={pd} />
              );
            })}
        </CardContainer>
      </div>
    );
  }
}

const mapStateToProps = ({ products, price, isCartOpen }) => ({
  products,
  price,
  isCartOpen,
});

export default connect(mapStateToProps, null)(Clothes);
