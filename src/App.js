import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PageContainer } from "./App.styles";
import { LOAD_CATEGORIES } from "./GraphQL/Queries";
import Cart from "./pages/Cart/Cart";
import Clothes from "./pages/Clothes/Clothes";
import Navbar from "./pages/components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Tech from "./pages/Tech/Tech";
import { addToProducts } from "./redux/actions/cartActions";

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

const mapStateToProps = ({ products, price }) => ({ products, price });

const mapDispatchToProps = {
  addToProducts: addToProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
