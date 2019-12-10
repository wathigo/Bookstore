/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.book.id}</td>
        <td>{this.props.book.title}</td>
        <td>{this.props.book.category}</td>
      </tr>
    );
  }
}

export default Book;

Book.propTypes = {
  book: PropTypes.object,
};
