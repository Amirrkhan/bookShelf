import React, { Component } from "react";
import { connect } from "react-redux";

import { logoutUser } from "../../actions/index";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(logoutUser(props));
  }
  render() {
    return (
      <div className="logout_container">
        <h1>Sorry to see you go...</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Logout);
