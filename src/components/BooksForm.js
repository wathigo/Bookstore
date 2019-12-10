/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from '../actions';

const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-fi'];

const mapStateToProps = function (state) {
  return {
    bookStore: state,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    createBook: (book) => {
      dispatch(Actions.createBook(book));
      }
};
};

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      title: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(Actions.createBook({
      title: this.state.title,
      category: this.state.category
    }))
    // this.props.createBook({
    //   title: this.state.title,
    //   category: this.state.category
    // });
    console.log(this.props.bookStore, "Current state!")
  }

  handleChange(event) {
    switch (event.target.id) {
      case 'title':
        this.state.title = event.target.value;
        break;
      case 'category':
        this.state.category = event.target.value;
        break;
      default:
        break;

    }

  }

  render() {
    const options = CATEGORIES.map(category => <option key={category}>{category}</option>);
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="title">
          Title:
          <input type="text" id='title' name="title" onChange={ this.handleChange } />
        </label>
        <br />
        <label htmlFor="category">
          Category:
          <select id='category' onChange={ this.handleChange }>
            {options}
          </select>
        </label>

        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default connect(mapStateToProps)(BooksForm);
