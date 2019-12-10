/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.Component {
  render() {
    const { id, title, category } = this.props.book;
    return (
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{category}</td>
      </tr>
    );
  }
}

export default Book;

Book.propTypes = {
  book: PropTypes.object,
};
