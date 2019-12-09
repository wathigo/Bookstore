import { combineReducers } from 'redux';
import booksReducer from './books';

const rootReducer = combineReducers({
  bookestore: booksReducer
});

export default rootReducer;
