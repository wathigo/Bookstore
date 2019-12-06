/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.Component {
  render() {
    return (
      <div className="Book">
        {this.props.book}
      </div>
    );
  }
}

export default Book;
