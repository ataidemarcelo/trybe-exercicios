const Redux = require('redux');
const LoginLogoutReducer = require('./login-logout-reducer');

const fazerLoginAction = (email) => ({
  type: 'LOGIN',
  email
});

const fazerLogoutAction = () => ({
  type: 'LOGOUT'
});

const reducerCombinados = Redux.combineReducers({
  LoginLogoutReducer
});

const store = Redux.createStore(reducerCombinados);

store.dispatch(fazerLoginAction('email@email.com'));
console.log(store.getState());

store.dispatch(fazerLogoutAction());
console.log(store.getState());
