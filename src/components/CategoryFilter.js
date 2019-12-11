import { React } from 'react';

const CATEGORIES = ['-------', 'All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-fi'];

class CategoryFilter extends React.Component {
  render() {
    const options = CATEGORIES.map(category => <option>{category}</option>)
    return (
      <select>
        {options}
      </select>
    )
  }
}
