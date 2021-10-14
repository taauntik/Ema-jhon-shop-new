import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { CardContainer } from "../../Home.styles";
import Card from "../Card/Card";

class Cards extends PureComponent {

  renderCards() {
    const { products, search } = this.props;
    const { categories } = products;
    return (
      <>
        {categories &&
          categories.map(({ products }) => {
            if (search === "") {
              return products.map((pd) => <Card key={pd.id} product={pd} />);
            } else {
              return products.map(
                (pd) =>
                  pd.name.toLowerCase().includes(search.toLowerCase()) && (
                    <Card key={pd.id} product={pd} />
                  )
              );
            }
          })}
      </>
    );
  }

  render() {
    return <CardContainer>{this.renderCards()}</CardContainer>;
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search,
    products: state.products,
  };
};

export default connect(mapStateToProps, null)(Cards);
