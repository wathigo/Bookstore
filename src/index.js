import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

const createBook = (title, category) => {
  return {
    id: Math.random(),
    title: title,
    category: category,
  };
}

const book1 = createBook('Paradise', 'Entertainment');
const book2 = createBook('Ethical Hacking', 'Education');
const book3 = createBook("You Don't know Javascript", 'Education');

const books = [book1, book2, book3];

const store = createStore(rootReducer, { bookestore: books },
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
  );
