import { combineReducers } from 'redux';
import booksRecuder from './reducer_books'
import activeBookReducer from './reducer_active_book'

const rootReducer = combineReducers({
  books: booksRecuder,
  activeBook: activeBookReducer
});

export default rootReducer;
