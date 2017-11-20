/*
 * This reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 */

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN_REQUEST':
      return state;
      case 'AUTH_REGISTER_REQUEST':
          return state;
    case 'AUTH_LOGIN_FAILURE':
      return state;
      case 'AUTH_REGISTER_FAILURE':
          return state;
      case 'AUTH_LOGIN_SUCCESS':
      return Object.assign({}, state, {
        firebase: action.payload
      });
      case 'AUTH_REGISTER_SUCCESS':
      return Object.assign({}, state, {
          firebase:action.payload
      });
    case 'AUTH_LOGOUT_SUCCESS':
      return Object.assign({}, state, {
        firebase: null
      });
    default:
      return state;
  }
};
