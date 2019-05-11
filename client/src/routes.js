import React from "react";
import { Switch, Route } from "react-router-dom";

// COMPONENTS
import Layout from "./hoc/Layout/layout";
import Home from "./components/Home/home";
import BookView from "./components/Books/index";
import Login from "./containers/Admin/login";
import Logout from "./containers/Admin/logout.js";
import Auth from "./hoc/auth";
import User from "./components/Admin";
import AddBook from "./containers/Admin/addBook";
import UserPosts from "./components/Admin/userPosts";
import EditBook from "./containers/Admin/editBook";
import AddNewUser from "./containers/Admin/addNewUser";
import Registration from "./containers/Admin/registration";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Auth(Home, null)} />
        <Route path="/books/:id" exact component={Auth(BookView)} />
        <Route path="/login" exact component={Auth(Login, false)} />
        <Route path="/user" exact component={Auth(User, true)} />
        <Route path="/user/logout" exact component={Logout} />
        <Route path="/user/add" exact component={Auth(AddBook, true)} />
        <Route
          path="/user/user-reviews"
          exact
          component={Auth(UserPosts, true)}
        />
        <Route
          path="/user/edit-post/:id"
          exact
          component={Auth(EditBook, true)}
        />
        <Route path="/user/register" exact component={Auth(AddNewUser, true)} />
        <Route
          path="/registration"
          exact
          component={Auth(Registration, false)}
        />
      </Switch>
    </Layout>
  );
};

export default Routes;
