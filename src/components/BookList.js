/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from '../actions'
import Book from './Book';

const mapStateToProps = function(state){
  console.log(state)
  return {
    bookStore: state
  }
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    createBook: Actions.createBook,
    removeBook: Actions.removeBook,
  }, dispatch)
}

class BookList extends React.Component {

  render() {
    return (
      <div className="BookList">
        <Book book={this.props.bookStore}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
