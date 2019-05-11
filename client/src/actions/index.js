import axios from "axios";

// BOOKS

export function getBooks(limit = 10, start = 0, order = "asc", list = "") {
  const request = axios
    .get(`/books?limit=${limit}&skip=${start}&order=${order}`)
    .then(response => {
      if (list) {
        return [...list, ...response.data];
      } else {
        return response.data;
      }
    });

  return {
    type: "GET_BOOKS",
    payload: request
  };
}

export function getBookWithReviewer(id) {
  const request = axios.get(`/getBook?id=${id}`);

  return dispatch => {
    request.then(({ data }) => {
      let book = data;

      axios.get(`/getReviewer?id=${book.ownerId}`).then(({ data }) => {
        let response = {
          book,
          reviewer: data
        };

        dispatch({
          type: "GET_BOOK_WITH_REVIEWER",
          payload: response
        });
      });
    });
  };
}

export function clearBoxWithReviewer() {
  return {
    type: "CLEAR_BOOK_W_R",
    payload: {
      book: {},
      reviewer: {}
    }
  };
}

export function getBook(bookId) {
  const request = axios
    .get(`/getBook?id=${bookId}`)
    .then(response => response.data);

  return {
    type: "GET_BOOK",
    payload: request
  };
}

export function getAllUserPosts(ownerId) {
  const request = axios
    .get(`/user_posts?user=${ownerId}`)
    .then(response => response.data);
  console.log(request);
  return {
    type: "USER_BOOKS",
    payload: request
  };
}

export function addNewBook(book) {
  const request = axios.post("/book", book).then(response => response.data);

  return {
    type: "CREATE_N_BOOK",
    payload: request
  };
}

export function updateBook(data) {
  const request = axios
    .post("/book_update", data)
    .then(response => response.data);

  return {
    type: "UPDATE_BOOK",
    payload: request
  };
}

export function deleteBook(id) {
  const request = axios
    .delete(`/book_delete?id=${id}`)
    .then(response => response.data);

  return {
    type: "DELETE_BOOK",
    payload: request
  };
}

export function removeNewBook() {
  return {
    type: "REMOVE_N_BOOK_FROM_PROPS",
    payload: {}
  };
}

export function clearStoreWithDeletedPost() {
  return {
    type: "CLEAR_STORE_WITH_DELETED_POST",
    payload: {
      postDeleted: false,
      updatedBook: false,
      book: null
    }
  };
}

// USER

export function loginUser({ email, password }) {
  const request = axios
    .post("/login", { email, password })
    .then(response => response.data);

  return {
    type: "USER_LOGIN",
    payload: request
  };
}

export function auth() {
  const request = axios.get("/auth").then(response => response.data);

  return {
    type: "USER_AUTH",
    payload: request
  };
}

export function logoutUser(propsFrom) {
  const request = axios.get("/logout").then(response => {
    setTimeout(() => {
      propsFrom.history.push("/");
    }, 2000);
    return response.date;
  });

  return {
    type: "USER_LOGOUT",
    payload: request
  };
}

export function getAllUsers() {
  const request = axios.get("/users").then(response => response.data);

  return {
    type: "GET_ALL_USERS",
    payload: request
  };
}

export function registerUser(data, userList) {
  if (userList) {
    const request = axios.post("/register", data);
    return dispatch => {
      request.then(({ data }) => {
        let users = data.success ? [...userList, data.user] : userList;
        let response = {
          success: data.success,
          users
        };
        dispatch({
          type: "ADD_NEW_USER",
          payload: response
        });
      });
    };
  } else {
    const request = axios
      .post("/register", data)
      .then(response => response.data);

    return {
      type: "USER_REGISTER",
      payload: request
    };
  }
}

export function deleteUser(id) {
  console.log(id);
  const request = axios
    .delete("/user_delete", { data: { id } })
    .then(response => response.data);

  return {
    type: "USER_DELETE",
    payload: request
  };
}
//
