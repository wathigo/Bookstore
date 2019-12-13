/* eslint-disable func-names */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const mapStateToProps = function (state) {
  return {
    bookStore: state.bookestore,
    filter: state.filter,
  };
};

const CATEGORIES = ['-------', 'All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-fi'];

class CategoryFilter extends React.Component {
  render() {
    const options = CATEGORIES.map((category) => <option key={category}>{category}</option>);
    return (
      <div className="categoryfilter">
        <h1 className="new-book">Filter</h1>
        <select id="categorySelectors-filter" onChange={this.props.handleFilterChange}>
          {options}
        </select>
      </div>
    );
  }
}

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(CategoryFilter);
