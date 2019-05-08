import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllUserPosts } from "../../actions";
import moment from "moment-js";
import { Link } from "react-router-dom";

class UserPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.dispatch(getAllUserPosts(this.props.user.login.id));
  }

  showUserPosts = userPosts =>
    userPosts.books
      ? userPosts.books.map(item => (
          <tr key={item._id}>
            <td>
              <Link to={`/user/edit-post/${item._id}`}>{item.name}</Link>
            </td>
            <td>{item.authors}</td>
            <td>{moment(item.createdAt).format("MM/DD/YY")}</td>
          </tr>
        ))
      : null;

  render() {
    const userPosts = this.props.books;

    return (
      <div className="user_posts">
        <h4>Your reviews</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Author</th>
              <th>Date</th>
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
