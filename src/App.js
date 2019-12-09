import React from 'react';
import './App.css';
import Booklist from './components/BookList';
import BookForm from './components/BooksForm';


function App() {
  return (
    <div className="App">
      <h2> Welcome to BookStore </h2>
      <BookForm />
      <Booklist />
    </div>
  );
}

export default App;
