export default function(state = {}, action) {
  switch (action.type) {
    case "GET_BOOK":
      return { ...state, book: action.payload };
    case "GET_BOOKS":
      return { ...state, list: action.payload };
    case "GET_BOOK_WITH_REVIEWER":
      return {
        ...state,
        book: action.payload.book,
        reviewer: action.payload.reviewer
      };
    case "CLEAR_BOOK_W_R":
      return {
        ...state,
        book: action.payload.book,
        reviewer: action.payload.reviewer
      };
    case "CREATE_N_BOOK":
      return {
        ...state,
        newbook: action.payload
      };
    case "REMOVE_N_BOOK_FROM_PROPS":
      return {
        ...state,
        newbook: action.payload
      };
    case "USER_BOOKS":
      return {
        ...state,
        books: action.payload
      };
    case "UPDATE_BOOK":
      return {
        ...state,
        updatedBook: action.payload
      };
    case "DELETE_BOOK":
      return {
        ...state,
        postDeleted: action.payload
      };
    case "CLEAR_STORE_WITH_DELETED_POST":
      return {
        ...state,
        postDeleted: action.payload.postDeleted,
        updatedBook: action.payload.updatedBook,
        book: action.payload.books
      };
    default:
      return state;
  }
}
