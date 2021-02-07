// Based on a component from React docs https://reactjs.org/docs/thinking-in-react.html

import React from 'react';

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

export default ProductCategoryRow;