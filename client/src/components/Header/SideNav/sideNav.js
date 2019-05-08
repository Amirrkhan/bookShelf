import React from "react";
import SideNav from "react-simple-sidenav";

// COMPONENTS
import SideNavItems from "./sideNavItems.js";

const Navigation = props => {
  return (
    <SideNav
      showNav={props.showNav}
      onHideNav={props.onHideNav}
      navStyle={{
        background: "#242424",
        maxWidth: "220px"
      }}
    >
      <SideNavItems navItems={props.sideNavItems} />
    </SideNav>
  );
};

export default Navigation;
