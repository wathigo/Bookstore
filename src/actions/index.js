
const Actions = (() => {
  const CREATE_BOOK = 'CREATE_BOOK';
  const REMOVE_BOOK = 'REMOVE_BOOK';
  const CHANGE_FILTER = 'CHANGE_FILTER';

  const createBook = book => ({
    type: CREATE_BOOK,
    book,
  });

  const removeBook = book => ({
    type: REMOVE_BOOK,
    book_id: book.id,
  });

  const changeFilter = filter => ({
    type: CHANGE_FILTER,
    filter,
  });

  return { createBook, removeBook, changeFilter };
})();

export default Actions;
