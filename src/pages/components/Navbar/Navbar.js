import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

// components
import NavigationLinks from "./components/NavigationLinks";
import CurrencySwitcher from "./components/CurrencySwitcher";
import MiniCart from "./components/MiniCart";

// styles
import { NavContainer, Navs, NavIcon } from "./Navbar.styles";

// images
import Icon from "../../../assets/navIcon.svg";

class Navbar extends PureComponent {
  constructor() {
    super();
    this.state = {
      isSticky: false,
    };
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        this.setState({ isSticky: true });
      } else {
        this.setState({ isSticky: false });
      }
    });
  }

  render() {
    const { location } = this.props;

    return (
      <NavContainer sticky={this.state.isSticky}>
        <NavigationLinks location={location} />
        <Link to="/">
          <NavIcon title="go to home" src={Icon} alt="" />
        </Link>
        <Navs>
          <CurrencySwitcher />
          <MiniCart />
        </Navs>
      </NavContainer>
    );
  }
}

export default withRouter(Navbar);
