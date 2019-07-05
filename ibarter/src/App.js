import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemCardContainer from "./containers/ItemCardContainer";
import NewItemForm from "./containers/NewItemForm.js"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const API = "https://ibarter.herokuapp.com/";

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
				<ItemCardContainer items={this.state.items} />
			</React.Fragment>
		)
	}

	listItem = () => {
		return (
			<NewItemForm onChange={this.itemOnChange} submit={this.submitItem} />
		)
	}

	itemOnChange = (e) => {
		const newForm = this.state.itemForm;
		if(e.target.name == "images") {
			newForm.set(`item[${e.target.name}][]`, e.target.files[0]);
		} else {
			newForm.set(`item[${e.target.name}]`, e.target.value);
		}
		this.setState({itemForm: newForm})
	}

	submitItem = () => {
		console.log(this.state.itemForm);
		fetch(`${API}/items`, {
			method: "POST",
			body: this.state.itemForm
		})
		
	}

	render() {
		return (
			<>
				<NavBar isLogged={this.state.isLogged} />
				<Router>
					<Route path="/" exact component={this.home} />
					<Route path="/list-item" component={this.listItem} />
				</Router>
			</>
		);
	}
}

export default App;
