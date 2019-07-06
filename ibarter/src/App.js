import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import ItemCardContainer from "./containers/ItemCardContainer";
import NewItemForm from "./containers/NewItemForm"
import Login from "./containers/Login"
import Logout from "./components/Logout"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const API = "https://ibarter.herokuapp.com/api/";

class App extends Component {
	
	state = {
		isLogged: true,
		items: [],
		itemForm: new FormData()
	};

	componentDidMount() {
		fetch(`${API}items`)
			.then(resp => resp.json())
			.then((data) => {
				this.setState({items: data})
			})
	}

	home = () => {
		return (
			<React.Fragment>
				<Carousel />  
				<ItemCardContainer items={this.state.items} />
			</React.Fragment>
		)
	}

	listItem = () => {
		return (
			<NewItemForm onChange={this.itemOnChange} submit={this.submitItem} />
		)
	}

	login = () => {
		return <Login />
	}

	logout = () => {
		return <Logout />
	}

	render() {
		return (
			<>
				<link href="https://fonts.googleapis.com/css?family=Raleway:200&display=swap" rel="stylesheet"/>
				<Router>
					<NavBar isLogged={this.state.isLogged} />
					<Route path="/" exact component={this.home} />
					<Route path="/list-item" component={this.listItem} />
					<Route path="/login" component={this.login} />
					<Route path="/logout" component={this.logout} />
				</Router>
			</>
		);
	}
}

export default App;
