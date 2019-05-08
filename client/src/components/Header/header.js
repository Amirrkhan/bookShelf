import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";

// COMPONENTS
import Navigation from "./SideNav/sideNav";

const sideNavItems = [
  {
    type: "navItem",
    text: "Home",
    icon: "home",
    link: "/",
    restricted: false
  },
  {
    type: "navItem",
    text: "My Profile",
    icon: "user",
    link: "/user",
    restricted: true
  },
  {
    type: "navItem",
    text: "Add Admins",
    icon: "plus",
    link: "/user/register",
    restricted: true
  },
  {
    type: "navItem",
    text: "Login",
    icon: "sign-in",
    link: "/login",
    restricted: false,
    exclude: true
  },
  {
    type: "navItem",
    text: "My reviews",
    icon: "comments",
    link: "/user/user-reviews",
    restricted: true
  },
  {
    type: "navItem",
    text: "Add a review",
    icon: "plus",
    link: "/user/add",
    restricted: true
  },
  {
    type: "navItem",
    text: "Logout",
    icon: "sign-out",
    link: "/user/logout",
    restricted: true
  }
];

class Header extends Component {
  state = {
    showNav: false
  };

  toggleNavigation = () => {
    this.setState({
      showNav: true
    });
  };

  onHideNav = () => {
    this.setState({ showNav: false });
  };

  render() {
    return (
      <header>
        <div className="open_nav">
          <FontAwesome
            name="bars"
            style={{
              color: "#ffffff",
              padding: "10px",
              cursor: "pointer"
            }}
            onClick={this.toggleNavigation}
          />
        </div>

        <Navigation
          showNav={this.state.showNav}
          onHideNav={this.onHideNav}
          sideNavItems={sideNavItems}
        />

        <Link to="/" className="logo">
          The Book Shelf
        </Link>
      </header>
    );
  }
}

export default Header;
