/* eslint-disable func-names */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';


const mapStateToProps = function (state) {
  return {
    bookStore: state.bookestore,
  };
};


class BookList extends React.Component {
  render() {
    const booksAll = this.props.bookStore.map(item => <Book book={item} key={item.id} />);

    return (
      <div className="BookList">
        <table className="BooksTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {booksAll}
          </tbody>
        </table>
      </div>
    );
  }
}

BookList.propTypes = {
  bookStore: PropTypes.array,
};

BookList.defaultProps = {
  bookStore: {},
};

export default connect(mapStateToProps)(BookList);
