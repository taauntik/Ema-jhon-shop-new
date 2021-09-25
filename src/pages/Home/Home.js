import React, { PureComponent } from "react";
import { connect } from "react-redux";

// styles
import { Heading, Container } from "./Home.styles";

// components
import { Overlay } from "../components/Overlay/Overlay";
import SearchInput from "./components/Search/SearchInput";
import Cards from "./components/Cards/Cards";

class Home extends PureComponent {
  render() {
    return (
      <div>
        {this.props.isCartOpen && <Overlay />}
        <Container>
          <Heading>Category Name</Heading>
          <SearchInput />
          <Cards />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isCartOpen: state.isCartOpen,
  };
};

export default connect(mapStateToProps, null)(Home);
