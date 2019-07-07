import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import ItemCardContainer from "./containers/ItemCardContainer";
import NewItemForm from "./containers/NewItemForm"
import Login from "./containers/Login"
import Logout from "./components/Logout"
import SignUpForm from "./containers/SignUpForm"
import ItemPage from "./containers/ItemPage"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const API = "https://ibarter.herokuapp.com/api/";

class App extends Component {
	state = {
		isLogged: false,
		items: [],
		itemForm: new FormData()
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
		)
	}

	setIsLogged = (val) => {
		this.setState({isLogged: val})

		// Get the user ID
		
	}

	listItem = () => {
		return (
			<NewItemForm onChange={this.itemOnChange} submit={this.submitItem} />
		);
	};

	login = () => {
		return <Login setIsLogged={this.setIsLogged}/>
	}

	logout = () => {
		return <Logout setIsLogged={this.setIsLogged}/>
	}

	showItem = (props) => {
		return <ItemPage id={props.match.params.id} />
	}

	signUp = (props) => {
		return <SignUpForm setIsLogged={this.setIsLogged}/>
	}
	
	render() {
		return (
			<>
				<link href="https://fonts.googleapis.com/css?family=Raleway:200&display=swap" rel="stylesheet"/>
				<Router>
					<NavBar/>
					<div id="content">
						<Route path="/" exact component={this.home} />
						<Route path="/list-item" component={this.listItem} />
						<Route path="/login" component={this.login} />
						<Route path="/logout" component={this.logout} />
						<Route path="/signup" component={this.signUp} />
						<Route path="/items/:id" component={this.showItem} />
					</div>
				</Router>
				<Footer />
			</>
		);
	}
}

export default App;
