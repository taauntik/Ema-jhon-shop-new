import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import { CardContainer } from "../../Home.styles";

class Cards extends PureComponent {
  render() {
    const { products, search } = this.props;
    const { categories } = products;
    return (
      <CardContainer>
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
      </CardContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search,
    products: state.products,
  };
};

export default connect(mapStateToProps, null)(Cards);
