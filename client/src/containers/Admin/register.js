import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllUsers, registerUser } from "../../actions";

import Form from "../../widgetsUI/Form/Form";

const formData = {
  name: {
    element: "input",
    value: "",
    label: true,
    labelText: "Name",
    config: {
      name: "name",
      placeholder: "Enter your name"
    },
    validation: {
      required: true,
      type: "name",
      regexTemplate: "a"
    },
    valid: false,
    validationMessage: ""
  },
  lastname: {
    element: "input",
    value: "",
    label: true,
    labelText: "Lastname",
    config: {
      name: "lastname",
      placeholder: "Enter lastname"
    },
    validation: {
      required: true,
      type: "text",
      regexTemplate: "a"
    },
    valid: false,
    validationMessage: "Lastname field is not correct"
  },
  email: {
    element: "input",
    value: "",
    label: true,
    labelText: "Email",
    config: {
      name: "email",
      placeholder: "Enter your email"
    },
    validation: {
      required: true,
      type: "email",
      regexTemplate: "a"
    },
    valid: false,
    validationMessage: "Must be an email"
  },
  password: {
    element: "input",
    value: "",
    label: true,
    labelText: "Password",
    config: {
      name: "password",
      placeholder: "Enter your password",
      type: "password"
    },
    validation: {
      required: true,
      type: "password",
      regexTemplate: /[a-z]{3}/
    },
    valid: false,
    validationMessage: "Must be a password"
  }
};

const buttonConfig = {
  text: "submit",
  attr: {
    className: "button",
    type: "Add review"
  }
};

class Register extends Component {
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
        <div className="current_users">
          <h4>Current users</h4>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Lastname</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map(item => {
                return (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.lastname}</td>
                    <td>{item.email}</td>
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
        <Form
          formCaption={<h2>Add user</h2>}
          formData={formData}
          submitButtonConfig={buttonConfig}
          submitFormFunction={data => this.submitFormFunction(data)}
          clearAfterSubmit={true}
        />
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

export default connect(mapStateToProps)(Register);
