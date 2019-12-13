/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable func-names */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import Booklist from './components/BookList';
import BookForm from './components/BooksForm';

const mapStateToProps = function (state) {
  return {
    filter: state.filter,
  };
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-items">
            <h2 className="header"> BookStore CMS </h2>
            <span className="books">BOOKS</span>
            <span className="filter">{ this.props.filter }</span>
          </div>
        </nav>
        <Booklist />
        <BookForm />
      </div>
    );
  }
}

App.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(App);
