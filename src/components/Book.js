/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

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
