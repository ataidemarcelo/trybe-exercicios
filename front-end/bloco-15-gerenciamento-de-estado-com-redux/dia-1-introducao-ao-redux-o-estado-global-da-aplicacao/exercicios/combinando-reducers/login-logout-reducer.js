const ESTADO_INICIAL = { login: false, email: '' };

const LoginLogoutReducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case 'LOGIN': 
      return {
        // ...state,
        login: !state.login,
        email: action.email,
      }
      case 'LOGOUT': 
      return {
        // ...state,
        login: !state.login,
        email: '',
      }
    default:
      return state;
  }
};

module.exports = LoginLogoutReducer;
