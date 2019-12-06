

const booksReducer = (books = [], action) => {
  switch(action){
  case 'CREATE_BOOK':
    return [...books, action.book];
    break;
  case 'REMOVE_BOOK':
    return books.filter(book => book.id !== action.book_id);
    break;
  default:
    return books;
    break;
  }
};

export default booksReducer;
