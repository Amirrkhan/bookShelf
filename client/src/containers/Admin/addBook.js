import React, { Component } from "react";
import { Link } from "react-router-dom";

import Form from "../../widgetsUI/Form/Form";
import { addNewBook, removeNewBook } from "../../actions/index";
import { connect } from "react-redux";

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
  text: "submit",
  attr: {
    className: "button",
    type: "Add review"
  }
};

class AddBook extends Component {
  state = {
    formData: {
      name: "",
      authors: "",
      rating: ""
    },
    isSubmited: false
  };

  redirectToNewBook = book =>
    book.post ? (
      <div className="conf_link">
        Cool!!!
        <Link to={`/books/${book.bookId}`}>Click here to see the new book</Link>
      </div>
    ) : null;

  submitForm = book => {
    const id = this.props.user.login.id;

    this.props.dispatch(
      addNewBook({
        ...book,
        ownerId: id
      })
    );
    this.setState({
      isSubmited: true
    });
  };

  componentWillUnmount() {
    this.props.dispatch(removeNewBook());
  }
  render() {
    return (
      <div className="rl_container article" style={{ marginBottom: "40px" }}>
        <Form
          formData={formData}
          submitButtonConfig={buttonConfig}
          formCaption={<h2>Add a review</h2>}
          submitFormFunction={book => this.submitForm(book)}
        />
        {this.props.books.newbook
          ? this.redirectToNewBook(this.props.books.newbook)
          : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(AddBook);
