import {createStore, combineReducers} from 'redux';

const rootReducer = combineReducers({
  user: require('./product-redux').reducer,
});

export default rootReducer;
