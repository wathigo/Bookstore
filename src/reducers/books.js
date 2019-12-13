const booksReducer = (state = null, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.book];
    case 'REMOVE_BOOK':
      console.log(state)
      return state.filter(book => (book.id !== action.book.id) && (book.category === action.book.category));
    default:
      return state;
  }
};

export default booksReducer;
