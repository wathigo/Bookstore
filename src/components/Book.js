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
        <th>{this.props.book.id}</th>
        <th>{this.props.book.title}</th>
        <th>{this.props.book.category}</th>
      </tr>
    );
  }
}

export default Book;

Book.propTypes = {
  book: PropTypes.string,
};
