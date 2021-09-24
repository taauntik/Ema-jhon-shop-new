import React, { PureComponent } from "react";

// styles
import { Navs, SpecialNav, DisableLinkStyle, NavItem } from "../Navbar.styles";

export default class NavigationLinks extends PureComponent {
  render() {
    const { location } = this.props;
    return (
      <Navs>
        {location.pathname === "/" ? (
          <SpecialNav>all</SpecialNav>
        ) : (
          <DisableLinkStyle to="/">
            <NavItem>all</NavItem>
          </DisableLinkStyle>
        )}
        {location.pathname === "/tech" ? (
          <SpecialNav>tech</SpecialNav>
        ) : (
          <DisableLinkStyle to="/tech">
            <NavItem>tech</NavItem>
          </DisableLinkStyle>
        )}
        {location.pathname === "/clothes" ? (
          <SpecialNav>clothes</SpecialNav>
        ) : (
          <DisableLinkStyle to="/clothes">
            <NavItem>clothes</NavItem>
          </DisableLinkStyle>
        )}
      </Navs>
    );
  }
}
