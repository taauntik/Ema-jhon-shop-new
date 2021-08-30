import React, { Component } from "react";
// import ApolloClient from "apollo-boost";
// import { ApolloProvider } from "react-apollo";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./pages/components/Navbar/Navbar";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

// const localGraphQL = "http://localhost:4000/graphql";

const link = new HttpLink({
  uri: "http://localhost:4000/",
});

export const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export default class App extends Component {
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
        </Switch>
      </Router>
    );
  }
}
