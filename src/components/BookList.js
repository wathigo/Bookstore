/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from '../actions'
import Book from './Book';

const mapStateToProps = function (state) {
  console.log("state booklist", state)
  return {
    bookStore: state
  }
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    createBook: Actions.createBook,
    removeBook: Actions.removeBook,
  }, dispatch)
}

class BookList extends React.Component {

  render() {

    const booksAll = this.props.bookStore.bookestore.map((item) =>
        <Book book={item} />
    );

    return (
      <div className="BookList">
        <table className="BooksTable">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
          {booksAll}
        </table>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
