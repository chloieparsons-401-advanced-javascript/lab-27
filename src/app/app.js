import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./app.scss";
import { connect } from "react-redux";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleIncrement = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };

  handleDecrement = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <h4>{this.state.counter}</h4>
        <span onClick={this.handleIncrement}>Increment</span>
        <span onClick={this.handleDecrement}>Decrement</span>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
