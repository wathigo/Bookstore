/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './reducers';

const createBook = (title, category) => ({
  id: Math.random(),
  title,
  category,
});

const book1 = createBook('Paradise', 'Horror');
const book2 = createBook('Ethical Hacking', 'Kids');
const book3 = createBook("You Don't know Javascript", 'Action');

const books = [book1, book2, book3];

// eslint-disable-next-line max-len
const store = createStore(rootReducer, { bookestore: books }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);
