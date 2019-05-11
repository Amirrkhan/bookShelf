import React, { Component } from "react";
import Form from "../../widgetsUI/Form/Form";
import { connect } from "react-redux";

import { registerUser, loginUser } from "../../actions";

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

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: "",
      email: "",
      password: ""
    };
  }

  componentDidUpdate() {
    const { email, password } = this.state;
    if (this.props.user.register && !this.props.submitForm) {
      this.props.dispatch(loginUser({ email, password }));
    }
  }
  submitFormFunction = data => {
    const { email, password } = data;
    if (this.props.submitForm) {
      this.props.submitForm(data);
    } else {
      this.props.dispatch(registerUser(data));
      this.setState({
        email,
        password
      });
    }
  };

  render() {
    console.log(this.props);
    return (
      <div className="rl_container">
        <Form
          formCaption={<h2>Add a user</h2>}
          formData={formData}
          submitButtonConfig={buttonConfig}
          submitFormFunction={data => this.submitFormFunction(data)}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Registration);
