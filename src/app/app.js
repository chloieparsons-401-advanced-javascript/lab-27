import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Counter from "../counter/Counter";

import "./app.scss";

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
