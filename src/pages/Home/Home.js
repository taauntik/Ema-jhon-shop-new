import React, { PureComponent } from "react";
import { connect } from "react-redux";
// components
import { Overlay } from "../components/Overlay/Overlay";
import Cards from "./components/Cards/Cards";
import SearchInput from "./components/Search/SearchInput";
// styles
import { Container, Heading } from "./Home.styles";

class Home extends PureComponent {
  render() {
    const { isCartOpen } = this.props;
    return (
      <div>
        {isCartOpen && <Overlay />}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Container>
            <Heading>Category Name</Heading>
            <SearchInput />
            <Cards />
          </Container>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ isCartOpen }) => ({ isCartOpen });

export default connect(mapStateToProps, null)(Home);
