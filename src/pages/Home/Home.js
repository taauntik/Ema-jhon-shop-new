import React, { Component } from "react";
import Card from "./components/Card/Card";
import { LOAD_CATEGORIES } from "../../GraphQL/Queries";
import { client } from "../../App";

import { Heading, Container, CardContainer } from "./Home.styles";
import { addToProducts } from "../../redux/actions/cartActions";
import { connect } from "react-redux";

export const ProductsContext = React.createContext();

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    client
      .query({
        query: LOAD_CATEGORIES,
      })
      .then(({ data }) => this.props.addToProducts(data));
  }

  render() {
    const categories = this.props.products.categories;
    return (
      <ProductsContext.Provider value={{ categories: this.state.categories }}>
        <Container>
          <Heading>Category Name</Heading>
          <CardContainer>
            {categories && categories.map((category) => {
              const products = category.products;
              return products.map((pd) => <Card key={pd.id} product={pd} />);
            })}
          </CardContainer>
        </Container>
      </ProductsContext.Provider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = {
  addToProducts: addToProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
