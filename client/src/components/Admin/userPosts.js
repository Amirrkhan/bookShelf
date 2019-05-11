import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getAllUserPosts,
  deleteBook,
  clearStoreWithDeletedPost
} from "../../actions";
import moment from "moment-js";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";

class UserPosts extends Component {
  constructor(props) {
    super(props);
    this.state = { postDeleted: false };
    this.props.dispatch(getAllUserPosts(this.props.user.login.id));
  }

  postDelete = itemId => {
    this.props.dispatch(deleteBook(itemId));
    this.props.dispatch(getAllUserPosts(this.props.user.login.id));
  };

  componentWillUnmount() {
    this.props.dispatch(clearStoreWithDeletedPost());
  }

  showUserPosts = userPosts =>
    userPosts.books
      ? userPosts.books.map(item => (
          <tr key={item._id}>
            <td>{item.name}</td>
            <td>{item.authors}</td>
            <td>{moment(item.createdAt).format("MM/DD/YY")}</td>
            <td style={{ textAlign: "center" }}>
              <Link to={`/user/edit-post/${item._id}`}>
                <FontAwesome name="edit" />
              </Link>

              <button
                className="button"
                style={{
                  cursor: "pointer",
                  textAlign: "center",
                  marginLeft: "20px"
                }}
                onClick={() => this.postDelete(item._id)}
              >
                <FontAwesome name="remove" />
              </button>
            </td>
          </tr>
        ))
      : null;

  render() {
    const userPosts = this.props.books;
    console.log(userPosts);
    return (
      <div className="user_posts">
        <h4>Your reviews</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Author</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.showUserPosts(userPosts)}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(UserPosts);
