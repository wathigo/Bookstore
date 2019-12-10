/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Actions from '../actions';

const mapStateToProps = function (state) {
  return {
    bookStore: state,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    removeBook: (book) => {
      dispatch(Actions.removeBook(book));
    },
  };
};

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
  }

  handleRemoveBook(event) {
    event.preventDefault();
    this.props.removeBook(this.props.book);
  }


  render() {
    const { id, title, category } = this.props.book;
    return (
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{category}</td>
        <td><button onClick={this.handleRemoveBook} type="submit">Delete</button></td>
      </tr>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object,
  removeBook: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
