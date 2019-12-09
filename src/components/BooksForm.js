/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'Action',
    };
  }

  render() {
    return (
      <form>
        <input type="text" name="title" />
        <br />
        <select>
          <option value="Action">Action</option>
          <option value="Biography">Biography</option>
          <option value="History">History</option>
          <option value="Horror">Horror</option>
          <option value="Kids">Kids</option>
          <option value="Learning">Learning</option>
          <option value="Sci-fi">Sci-fi</option>

        </select>


        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default BooksForm;
