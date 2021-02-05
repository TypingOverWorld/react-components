// Based on a component from React docs https://reactjs.org/docs/conditional-rendering.html

import React from 'react';

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
    // This binding is necessary to make 'this' work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isLoggedIn: !state.isLoggedIn
    }));
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    // if the user is logged in, display "logout" and vice versa
    const buttonText = loginBoolean => loginBoolean ? 'Logout' : 'Login';

    return (
      <div>
        <button onClick={this.handleClick}>
          {buttonText(isLoggedIn)}
        </button>
      </div>
    );
  }
}

export default LoginControl;