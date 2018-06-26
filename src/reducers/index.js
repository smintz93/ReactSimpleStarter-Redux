import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
// key and value
// books is state and value is whatever gets returned from BooksReducer function 
// each key gets a reducer and is responsible for creating that piece of state 
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;