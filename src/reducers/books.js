const booksReducer = (books = [], action) => {
  switch(action){
  case 'CREATE_BOOK':
    return [...books, action.book];
  case 'REMOVE_BOOK':
    return books.filter(book => book.id !== action.book_id);
  default:
    return books;
  }
};

export default booksReducer;
