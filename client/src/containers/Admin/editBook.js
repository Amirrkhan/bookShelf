import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  getBook,
  updateBook,
  deleteBook,
  clearStoreWithDeletedPost
} from "../../actions";
import Form from "../../widgetsUI/Form/Form";

let formData = {
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
  authors: {
    element: "input",
    value: "",
    label: true,
    labelText: "Authors",
    config: {
      name: "authors",
      placeholder: "Enter authors"
    },
    validation: {
      required: true,
      type: "name",
      regexTemplate: "a"
    },
    valid: false,
    validationMessage: "Authors field is not correct"
  },
  rating: {
    element: "input",
    value: "",
    label: true,
    labelText: "Rating",
    config: {
      name: "rating",
      placeholder: "Rate this book by number"
    },
    validation: {
      required: true,
      type: "number",
      regexTemplate: "a"
    },
    valid: false,
    validationMessage: "Must be a number"
  },
  price: {
    element: "input",
    value: "",
    label: true,
    labelText: "Price",
    config: {
      name: "price",
      placeholder: "Enter the price of book"
    },
    validation: {
      required: true,
      type: "number",
      regexTemplate: ""
    },
    valid: false,
    validationMessage: "Must be a number"
  },
  pages: {
    element: "input",
    value: "",
    label: true,
    labelText: "Books pages",
    config: {
      name: "pages",
      placeholder: "Enter number of pages"
    },
    validation: {
      required: true,
      type: "number",
      regexTemplate: "a"
    },
    valid: false,
    validationMessage: "Must be a number"
  },
  reviews: {
    element: "textArea",
    value: "",
    label: true,
    labelText: "Review",
    config: {
      name: "reviews",
      cols: 10,
      rows: 4,
      placeholder: "Enter review for this book"
    },
    validation: {
      required: true,
      type: "text",
      regexTemplate: /[a-z]{3}/
    },
    valid: false,
    validationMessage: "Review is not correct"
  }
};

const buttonConfig = {
  text: "Edit review",
  attr: {
    className: "button",
    type: "submit"
  }
};
class EditBook extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(getBook(this.props.match.params.id));

    this.state = {
      formDataWithValues: {},
      isData: false
    };
  }

  componentDidUpdate() {
    if (!Object.keys(this.state.formDataWithValues).length) {
      this.transformBookToForm(this.props.books.book);
    }
  }

  transformBookToForm = book => {
    if (book) {
      let formDataWithValues = formData;
      for (let field in book) {
        const value = book[field];

        if (formData[field]) {
          formDataWithValues[field].value = value;
        }
      }
      this.setState({
        formDataWithValues
      });
    }
  };

  deleteReview = () => {
    const id = this.props.books.book._id;
    this.props.dispatch(deleteBook(id));
  };

  componentWillUnmount() {
    this.props.dispatch(clearStoreWithDeletedPost());
  }

  redirectUser = () => {
    setTimeout(() => {
      this.props.history.push("/user/user-reviews");
    }, 1000);
  };

  submitFormFunction = data => {
    const _id = this.props.books.book._id;
    this.props.dispatch(updateBook({ _id, ...data }));
  };

  render() {
    const books = this.props.books;
    return (
      <div className="rl_container article" style={{ marginBottom: "40px" }}>
        {books.updatedBook ? (
          <div className="edit_confirm">
            post updated,{" "}
            <Link to={`/books/${books.book._id}`}>
              click here to see updated post{" "}
            </Link>
          </div>
        ) : null}

        {books.postDeleted ? (
          <div className="red_tag">Post deleted {this.redirectUser()}</div>
        ) : null}

        <Form
          formCaption={<h2>Edit review</h2>}
          formData={
            Object.keys(this.state.formDataWithValues).length
              ? this.state.formDataWithValues
              : formData
          }
          submitButtonConfig={buttonConfig}
          submitFormFunction={data => this.submitFormFunction(data)}
        />
        <div
          className="delete_post"
          style={{ width: "65%", margin: "20px auto" }}
          onClick={this.deleteReview}
        >
          <div className="button">Delete Review</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(EditBook);
