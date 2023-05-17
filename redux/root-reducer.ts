import { createStore, combineReducers } from 'redux';

  const rootReducer = combineReducers({
    user: require('./user-redux').reducer,

  });

  export default rootReducer;

 
