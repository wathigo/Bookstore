/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Book extends React.Component {
  render() {
    return (
      <div className="Book">
        <th>{this.props.book.id}</th>
        <th>{this.props.book.title}</th>
        <th>{this.props.book.category}</th>
      </div>
    );
  }
}

export default Book;
