/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

const CATEGORIES = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-fi"]

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'Action',
    };
  }

  render() {
    const options = CATEGORIES.map((category, index) => <option>{category}</option>)
    return (
      <form>
        <label htmlFor="title">
          Title:
          <input type="text" name="title" />
        </label>
        <br />
        <label htmlFor="category">
          Category:
          <select>
            {options}
          </select>
        </label>

        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default BooksForm;
