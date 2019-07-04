import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";

class App extends Component {
  state = {
    isLogged: true
  };

  render() {
    return (
      <React.Fragment>
        <NavBar isLogged={this.state.isLogged} />
      </React.Fragment>
    );
  }
}

export default App;
