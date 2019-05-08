import React, { Component } from "react";
import { connect } from "react-redux";

// COMPONENTS
import { getBooks } from "../../actions";
import BookItem from "../../widgetsUI/bookItem/book_item";
import Button from "../../widgetsUI/Button/button";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(getBooks(1, 0, "asc"));
  }

  renderItems = books =>
    books.list
      ? books.list.map((item, i) => <BookItem key={i} {...item} />)
      : null;

  loadMore = () => {
    let count = this.props.books.list.length;
    this.props.dispatch(getBooks(1, count, "asc", this.props.books.list));
  };

  render() {
    return (
      <div>
        {this.renderItems(this.props.books)}
        <Button onclickFunc={this.loadMore} buttonText="loadmore" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(HomeContainer);
