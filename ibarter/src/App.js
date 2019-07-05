import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import ItemCardContainer from "./containers/ItemCardContainer";
import NewItemForm from "./containers/NewItemForm.js";
import UserPageContainer from "./containers/UserPageContainer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const API = "https://ibarter.herokuapp.com/api/";

class App extends Component {
  state = {
    isLogged: true,
    items: [],
    itemForm: new FormData(),
    users: [
      {
        id: 1,
        first_name: "Pat",
        last_name: "Santucci",
        email: "isuck@cambio.com",
        addr1: "51 Cambio Road",
        town: "Cambioville",
        county: "Cambioshire",
        postcode: "ER00R4",
        profile_pic:
          "https://uploads-learn.s3.amazonaws.com/uploads/identities/learn_account/avatar/f4738c2e-a40a-47be-9734-ce9c5169075d/avatar.png"
      }
    ]
  };

  componentDidMount() {
    fetch(`${API}items`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ items: data });
      });
  }

  home = () => {
    return (
      <React.Fragment>
        <Carousel />
        <ItemCardContainer items={this.state.items} />
      </React.Fragment>
    );
  };

  listItem = () => {
    return (
      <NewItemForm onChange={this.itemOnChange} submit={this.submitItem} />
    );
  };

  userPage = () => {
    return <UserPageContainer users={this.state.users} />;
  };

  itemOnChange = e => {
    const newForm = this.state.itemForm;
    if (e.target.name == "images") {
      newForm.set(`item[${e.target.name}][]`, e.target.files[0]);
    } else {
      newForm.set(`item[${e.target.name}]`, e.target.value);
    }
    this.setState({ itemForm: newForm });
  };

  submitItem = () => {
    console.log(this.state.itemForm);
    fetch(`${API}/items`, {
      method: "POST",
      body: this.state.itemForm
    });
  };

  render() {
    return (
      <>
        <NavBar isLogged={this.state.isLogged} />
        <Router>
          <Route path="/" exact component={this.home} />
          <Route path="/list-item" component={this.listItem} />
          <Route path="/userpage" component={this.userPage} />
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
