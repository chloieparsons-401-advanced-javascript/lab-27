import React from 'react';

/**
 * Counter class contains the increment and decrement handlers and buttons
 */

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  /**
   * handleIncrement function contains the function for incrementing the counter
   */

  handleIncrement = (e) => {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };

  /**
   * handleDecrement function contains the function for decrementing the counter
   */


  handleDecrement = (e) => {
    e.preventDefault();
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div className="counter">
        <h4 className="counterValue">{this.state.counter}</h4>
        <span onClick={this.handleIncrement}>Increment</span>
        <span onClick={this.handleDecrement}>Decrement</span>
      </div>
    );
  }
}

export default Counter;
