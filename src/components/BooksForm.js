/* eslint-disable func-names */
/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Actions from '../actions';


const CATEGORIES = ['Category', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-fi'];

const mapStateToProps = function (state) {
  return {
    bookStore: state,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    createBook: (book) => {
      dispatch(Actions.createBook(book));
    },
  };
};

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      title: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createBook({
      id: Math.random(),
      title: this.state.title,
      category: this.state.category,
    });
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const options = CATEGORIES.map(category => <option key={category}>{category}</option>);
    return (
      <div className="wholeFrom">
        <form onSubmit={this.handleSubmit}>
          <h1 className="new-book"> ADD A NEW BOOK </h1>
          <input type="text" id="titleInput" name="title" placeholder="Book title" onChange={this.handleChange} />
          <select id="categorySelectors-input" onChange={this.handleChange}>
            {options}
          </select>
          <input type="submit" value="ADD BOOK" className="submitBook" />
        </form>
      </div>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
