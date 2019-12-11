import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = function (state) {
  return {
    bookStore: state.bookestore,
    filter: state.filter,
  };
};

const CATEGORIES = ['-------', 'All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-fi'];

class CategoryFilter extends React.Component {
  render() {
    const options = CATEGORIES.map(category => <option>{category}</option>)
    return (
      <div className="categoryfilter">
      <h1>Filter</h1>
      <select onChange={this.props.handleFilterChange}>
        {options}
      </select>
      </div>
    )
  }
}

export default connect(mapStateToProps)(CategoryFilter);
