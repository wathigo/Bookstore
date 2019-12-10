const booksReducer = (state = null, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.book];
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.book_id);
    default:
      return state;
  }
};

export default booksReducer;
