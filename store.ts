import {createStore} from 'redux';
import rootReducer from './redux/root-reducer';

const store = createStore(rootReducer);

export default store;
