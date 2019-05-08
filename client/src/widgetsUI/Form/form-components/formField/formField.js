import React, { Component } from "react";

class formField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      existingInputValue: "",
      valid: false,
      touched: false,
      isDataLoaded: false
    };
    this.checkBeforeSendingInputValues();
  }

  renderField = () => {
    const { formData } = this.props;
    const { inputValue } = this.state;
    switch (formData.element) {
      case "input":
        return (
          <div className="form__field">
            {formData.label ? (
              <label htmlFor="">
                {formData.labelText}
                {formData.validation.required ? (
                  <span style={{ color: "red", marginLeft: "3px" }}>*</span>
                ) : null}
              </label>
            ) : null}{" "}
            <input
              type={formData.config.type ? null : "text"}
              onChange={event => this.changeHandler(event, false)}
              value={inputValue}
              onBlur={event => this.changeHandler(event, true)}
              {...formData.config}
            />
            {this.validationMessageTemplate()}
          </div>
        );
      case "textArea":
        return (
          <div className="form__field">
            {formData.label ? (
              <label htmlFor="">
                {formData.labelText}
                {formData.validation.required ? (
                  <span style={{ color: "red", marginLeft: "3px" }}>*</span>
                ) : null}
              </label>
            ) : null}
            <textarea
              type={formData.config.type ? null : "text"}
              onChange={event => this.changeHandler(event, false)}
              value={inputValue}
              onBlur={event => this.changeHandler(event, true)}
              {...formData.config}
            />

            {this.validationMessageTemplate()}
          </div>
        );
      default:
        return null;
    }
  };

  componentDidUpdate() {
    if (this.state.isDataLoaded) {
      this.checkBeforeSendingInputValues();
    }
  }

  checkBeforeSendingInputValues = () => {
    const { valid, inputValue, existingInputValue } = this.state;
    const inputName = this.props.formData.config.name;
    if (this.props.formData) {
      if (this.props.formData.value) {
        this.props.takeDataFromInputs(true, existingInputValue, inputName);
        this.setState({
          isDataLoaded: false
        });
      }
    } else {
      this.props.takeDataFromInputs(valid, inputValue, inputName);
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.formData.value !== prevState.existingInputValue) {
      const value = nextProps.formData.value;

      return {
        existingInputValue: value,
        inputValue: value,
        isDataLoaded: true
      };
    } else {
      return null;
    }
  }

  changeHandler = (event, blur) => {
    const { inputValue, valid } = this.state;

    this.inputValidation(event.target.value);
    const { name } = this.props.formData.config;
    this.setState({
      inputValue: event.target.value,
      touched: blur
    });

    this.props.takeDataFromInputs(valid, inputValue, name);
  };

  validationMessageTemplate = () => {
    const { valid, touched, inputValue } = this.state;
    const validationMessage = this.props.formData.validationMessage;
    let validationMessageTemplate = null;
    if (touched) {
      if (!valid) {
        if (inputValue) {
          validationMessageTemplate = (
            <span className="form__invalid--message">{validationMessage}</span>
          );
        } else {
          validationMessageTemplate = (
            <span className="form__invalid--message">Field is required</span>
          );
        }
      }
    }
    return validationMessageTemplate;
  };

  checkTypeOfValidation = type => {
    let defaultRegex;
    switch (type) {
      case "number":
        defaultRegex = /^\d+$/;
        break;
      case "text":
        defaultRegex = /[a-z0-9 ]$/i;
        break;
      case "name":
        defaultRegex = /[a-z ]+$/i;
        break;
      case "email":
        defaultRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        break;
      case "password":
        defaultRegex = /[a-z0-9 ]$/i;
        break;
      default:
        break;
    }
    return defaultRegex;
  };

  inputValidation = inputValue => {
    const { validation } = this.props.formData;

    let defaultRegex;
    let customRegex = validation.regexTemplate;
    if (validation.required) {
      if (inputValue) {
        defaultRegex = this.checkTypeOfValidation(validation.type);
      }
      this.checkingInputForValid(defaultRegex, customRegex, inputValue);
    }
  };

  checkingInputForValid = (defaultRegex, customRegex, inputValue) => {
    if (inputValue) {
      if (this.regMessageCheck(customRegex)) {
        if (defaultRegex.test(inputValue) && customRegex.test(inputValue)) {
          this.setState({
            valid: true
          });
        } else {
          this.setState({
            valid: false
          });
        }
      } else {
        if (defaultRegex.test(inputValue)) {
          this.setState({
            valid: true
          });
        } else {
          this.setState({
            valid: false
          });
        }
      }
    } else {
      this.setState({
        valid: false
      });
    }
  };

  regMessageCheck = customRegex => {
    const undefinedRegexTemplate = /(?:)/; //UNDEFINED REGEX SABLONE
    let isRegexValid;
    customRegex =
      !customRegex || customRegex === ""
        ? undefinedRegexTemplate
        : new RegExp(customRegex.source);
    // COMPARE UNDEFINED AND USER REGEX

    if (customRegex.toString() === undefinedRegexTemplate.toString()) {
      console.log("Regex expression is not valid");
      isRegexValid = false;
    }
    if (customRegex.toString() !== undefinedRegexTemplate.toString()) {
      isRegexValid = true;
    } else {
      isRegexValid = false;
    }
    return isRegexValid;
  };

  render() {
    return this.renderField();
  }
}

export default formField;
