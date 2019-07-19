import React from "react";

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Counter from "../components/counter/Counter";

import "./app.scss";

/**
 * App Class contains application elements and renders them
 */
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
