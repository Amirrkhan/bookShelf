export default function(state = {}, action) {
  switch (action.type) {
    case "USER_LOGIN":
      return { ...state, login: action.payload };
    case "USER_AUTH":
      return { ...state, login: action.payload };
    case "USER_LOGOUT":
      return { ...state, login: action.payload };
    case "GET_ALL_USERS":
      return { ...state, users: action.payload };
    case "ADD_NEW_USER":
      return {
        ...state,
        register: action.payload.success,
        users: action.payload.users
      };
    case "USER_REGISTER":
      return {
        ...state,
        register: action.payload.success
      };
    case "USER_DELETE":
      return {
        ...state,
        deleted: action.payload
      };
    default:
      return state;
  }
}
