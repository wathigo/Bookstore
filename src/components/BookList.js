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
      console.log("Dispatching...")
      dispatch(Actions.changeFilter(filter));
    },
  };
};

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: this.booksAll('All'),
    }; 

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.booksAll = this.booksAll.bind(this);

  };

  booksAll(filter) {
    console.log(this.props.filter, 'beggining');
    if (filter === 'All') {
      console.log(" filter all")
      return this.props.bookStore.map((item) => <Book book={item} key={item.id} />);
    }
    const sBooks = this.props.bookStore.filter((item) => item.category === this.props.filter);
    console.log("FILTERING....", sBooks)
    return sBooks.map((item) => <Book book={item} key={item.id} />);
  }

  handleFilterChange(event) {
    event.preventDefault();
    this.props.filterBooks(event.target.value);
    this.setState({ book: this.booksAll(event.target.value) });
  }

  render() {
    return (
      <div className="BookList">
        <CategoryFilter handleFilterChange={this.handleFilterChange} />
        <table className="BooksTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {this.state.book}
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
