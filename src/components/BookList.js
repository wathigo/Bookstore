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
import CategoryFilter from './CategoryFilter';
import Actions from '../actions';


const mapStateToProps = function (state) {
  return {
    bookStore: state.bookestore,
    filter: state.filter,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    filterBooks: (filter) => {
      dispatch(Actions.changeFilter(filter));
    },
  };
};

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.booksAll = this.booksAll.bind(this);
  }

  booksAll(filter) {
    if (filter === 'All') {
      return this.props.bookStore.map(item => <Book book={item} key={item.id} />);
    }
    const sBooks = this.props.bookStore.filter(item => item.category === filter);
    return sBooks.map(item => <Book book={item} key={item.id} />);
  }

  handleFilterChange(event) {
    event.preventDefault();
    this.props.filterBooks(event.target.value);
  }

  render() {
    return (
      <div className="BookList">
        <CategoryFilter handleFilterChange={this.handleFilterChange} filter={this.props.filter} />
        <table className="BooksTable">
          <tbody>
            {this.booksAll(this.props.filter)}
          </tbody>
        </table>
      </div>
    );
  }
}

BookList.propTypes = {
  bookStore: PropTypes.array,
  filterBooks: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

BookList.defaultProps = {
  bookStore: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
