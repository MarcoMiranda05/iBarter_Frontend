import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";

class App extends Component {
  state = {
    isLogged: false
  };

  render() {
    return (
      <React.Fragment>
        <NavBar isLogged={this.state.isLogged} />
        <Carousel />
      </React.Fragment>
    );
  }
}

export default App;
