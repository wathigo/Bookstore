/* eslint-disable max-len */
const booksReducer = (state = null, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.book];
    case 'REMOVE_BOOK':
      if (action.state.filter === 'All') {
        return state.filter((book) => (book.id !== action.book_id));
      }
      return state.filter((book) => (book.id !== action.book_id) && (book.category === action.state.filter));
    default:
      return state;
  }
};

export default booksReducer;
