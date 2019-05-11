import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllUsers, registerUser, deleteUser } from "../../actions";
import FontAwesome from "react-fontawesome";
import Registration from "../Admin/registration";

class AddNewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: ""
    };
    this.props.dispatch(getAllUsers());
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const propsUsers = nextProps.user.users;
    if (nextProps.user.login.isAuth && propsUsers !== prevState.users) {
      return { users: propsUsers };
    } else return null;
  }

  tableOfUsersRender = () => {
    let template;
    if (this.state.users && this.state.users !== {}) {
      template = (
        <div className="current_users" style={{ marginBottom: "100px" }}>
          <h4>Current users</h4>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map(item => {
                return (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.lastname}</td>
                    <td>{item.email}</td>
                    <td>
                      <div
                        className="button"
                        style={{
                          cursor: "pointer",
                          textAlign: "center",
                          marginLeft: "20px"
                        }}
                        onClick={() => this.userDelete(item._id)}
                      >
                        <FontAwesome name="remove" />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    } else template = null;

    return template;
  };

  userDelete = userId => {
    this.props.dispatch(deleteUser(userId));
    this.props.dispatch(getAllUsers());
  };

  registerStatusCheck = () => {
    let template;
    if (this.props.user.register !== undefined) {
      if (this.props.user.register) {
        template = (
          <div className="form__success">Successufully registered</div>
        );
      } else {
        template = (
          <div className="form__error">Error: Email is already exist</div>
        );
      }
      return template;
    } else return null;
  };

  submitFormFunction = data => {
    this.props.dispatch(registerUser(data, this.props.user.users));
    if (this.state.users) {
      this.setState({
        users: ""
      });
    }
  };

  render() {
    return (
      <div className="rl_container">
        <Registration submitForm={data => this.submitFormFunction(data)} />
        {this.registerStatusCheck()}
        {this.tableOfUsersRender()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(AddNewUser);
