import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  product: require('./product-redux').reducer,
});

export default rootReducer;
