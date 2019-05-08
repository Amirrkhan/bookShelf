import React from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import { connect } from "react-redux";

const sideNavItems = props => {
  const element = (item, i) => (
    <Link to={item.link} key={i} className={item.type}>
      <FontAwesome name={item.icon} />
      {item.text}{" "}
    </Link>
  );
  const renderItems = () => {
    return props.user.login
      ? props.navItems.map((item, i) => {
          if (props.user.login.isAuth) {
            return !item.exclude ? element(item, i) : null;
          } else {
            return !item.restricted ? element(item, i) : null;
          }
        })
      : null;
  };

  return renderItems();
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(sideNavItems);
