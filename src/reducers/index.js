import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
// key and value
// books is state and value is whatever gets returned from BooksReducer function 
  books: BooksReducer
});

export default rootReducer;