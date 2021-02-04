// Based on component from React Docs https://reactjs.org/docs/handling-events.html

import React from 'react';

class ToggleState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make 'this' work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  // Switch toggle to the opposite of its current boolean state
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  // Renders a button that says 'ON' or 'OFF' based on the toggle state
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }

}

export default ToggleState;