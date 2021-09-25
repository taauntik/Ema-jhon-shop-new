import React, { PureComponent } from "react";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./pages/components/Navbar/Navbar";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./pages/Cart/Cart";
import Tech from "./pages/Tech/Tech";
import Clothes from "./pages/Clothes/Clothes";
import { addToProducts } from "./redux/actions/cartActions";
import { connect } from "react-redux";
import { LOAD_CATEGORIES } from "./GraphQL/Queries";

const link = new HttpLink({
  uri: "http://localhost:4000/",
});

export const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

class App extends PureComponent {
  componentDidMount() {
    client
      .query({
        query: LOAD_CATEGORIES,
      })
      .then(({ data }) => this.props.addToProducts(data));
  }

  render() {
    console.log("APP PROPS", this.props);
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/productDetail/:id">
            <ProductDetail />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/tech">
            <Tech />
          </Route>
          <Route path="/clothes">
            <Clothes />
          </Route>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    price: state.price,
  };
};

const mapDispatchToProps = {
  addToProducts: addToProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
