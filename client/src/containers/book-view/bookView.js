import React, { Component } from "react";
import { connect } from "react-redux";

// COMPONENTS
import { getBookWithReviewer, clearBoxWithReviewer } from "../../actions/index";

class BookViewContainer extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(getBookWithReviewer(this.props.id));
  }

  componentWillUnmount() {
    this.props.dispatch(clearBoxWithReviewer());
  }

  renderBook = books =>
    books.book ? (
      <div className="br_container">
        <div className="br_header">
          <h2>{books.book.name}</h2>
          <h5>{books.book.authors}</h5>
          <div className="br_reviewer">
            <span>Review by:</span> {books.reviewer.name}{" "}
            {books.reviewer.lastname}
          </div>
        </div>
        <div className="br_review">{books.book.reviews}</div>
        <div className="br_box">
          <div className="left">
            <div>
              <span>Pages:</span> {books.book.pages}
            </div>
            <div>
              <span>Price:</span> ${books.book.price}
            </div>
          </div>
          <div className="right">
            <span>Rating</span>
            <div>{books.book.rating}/5 </div>
          </div>
        </div>
      </div>
    ) : null;

  render() {
    let books = this.props.books;

    return <div>{this.renderBook(books)}</div>;
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookViewContainer);
