import React, { Component } from "react";

import FormField from "./form-components/formField/formField";

import "./form.sass";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formFieldWithNoValidation: {},
      errorMessage: false
    };
  }

  takeDataFromInputs = (isValid, inputValue, inputName) => {
    const { formFieldWithNoValidation } = this.state;
    let arraysOfField = formFieldWithNoValidation;

    if (formFieldWithNoValidation[inputName]) {
      arraysOfField[inputName] = {
        isValid,
        inputValue
      };
      this.setState({
        formFieldWithNoValidation: arraysOfField
      });
    }

    arraysOfField[inputName] = {
      isValid,
      inputValue
    };
    this.setState({
      formFieldWithNoValidation: arraysOfField
    });
  };

  renderFields = () => {
    let template = [];
    const formData = this.props.formData;
    if (Object.keys(formData).length) {
      for (let field in formData) {
        const inputData = formData[field];
        template.push(
          <FormField
            takeDataFromInputs={(isValid, inputValue, inputName) =>
              this.takeDataFromInputs(isValid, inputValue, inputName)
            }
            key={field}
            formData={inputData}
          />
        );
      }
    }
    return template;
  };

  checkBeforeSubmit = () => {
    const { formFieldWithNoValidation } = this.state;
    let validData = {};

    if (Object.keys(formFieldWithNoValidation).length) {
      for (let field in formFieldWithNoValidation) {
        if (!formFieldWithNoValidation.hasOwnProperty(field)) continue;
        let obj = formFieldWithNoValidation[field];

        if (!obj.isValid) {
          break;
        } else {
          validData[field] = obj.inputValue;
        }
      }
    }

    if (
      Object.keys(validData).length ===
      Object.keys(formFieldWithNoValidation).length
    ) {
      return validData;
    } else {
      return null;
    }
  };

  submitForm = e => {
    e.preventDefault();
    this.setState({
      errorMessage: ""
    });
    const data = this.checkBeforeSubmit();
    if (data !== null) {
      if (Object.keys(data).length) {
        this.props.submitFormFunction(data);
      } else {
        this.setState({
          errorMessage: "You should fill all requierd fields"
        });
      }
    } else {
      this.setState({
        errorMessage: "One of the fields is not correct"
      });
    }
  };

  render() {
    const buttonConfig = this.props.submitButtonConfig;
    const { errorMessage, clearForm } = this.state;
    return (
      <div className="form">
        {this.props.formCaption}
        {this.renderFields()}

        <button type="submit" onClick={this.submitForm} {...buttonConfig.attr}>
          {buttonConfig.text}
        </button>
        {errorMessage ? (
          <div style={{ marginTop: "10px", color: "red" }}>{errorMessage}</div>
        ) : null}
      </div>
    );
  }
}

export default Form;
