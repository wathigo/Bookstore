/* eslint-disable func-names */
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
    state,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    removeBook: (book, stateInput) => {
      dispatch(Actions.removeBook(book, stateInput));
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
    this.props.removeBook(this.props.book, this.props.state);
  }


  render() {
    const { title, category } = this.props.book;
    return (
      <tr className="book-cont">
        <td>
          <div className="bookInfo-container">
            <div className="description-container">
              <div className="category">
                {' '}
                {category}
                {' '}
              </div>
              <div className="title">
                {' '}
                {title}
                {' '}
              </div>
            </div>
            <div className="removeButton-container">
              <button onClick={this.handleRemoveBook} type="submit" className="remove">REMOVE</button>
            </div>
          </div>
        </td>
      </tr>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object,
  removeBook: PropTypes.func,
  state: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
