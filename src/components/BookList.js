/* eslint-disable func-names */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Actions from '../actions';
import Book from './Book';


const mapStateToProps = (state) => ({ bookStore: state });


const mapDispatchToProps = (dispatch) => (({
  createBook: Actions.createBook,
  removeBook: Actions.removeBook,
}, dispatch));

class BookList extends React.Component {
  render() {
    // eslint-disable-next-line react/jsx-key
    const booksAll = this.props.bookStore.bookestore.map((item) => <Book book={item} />);

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

BookList.propTypes = {
  bookStore: PropTypes.object,
};

BookList.defaultProps = {
  bookStore: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
