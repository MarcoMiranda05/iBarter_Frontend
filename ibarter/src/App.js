import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import ItemCardContainer from "./containers/ItemCardContainer";
import UserPageContainer from "./containers/UserPageContainer";
import NewItemForm from "./containers/NewItemForm";
import Login from "./containers/Login";
import Logout from "./components/Logout";
import SignUpForm from "./containers/SignUpForm";
import OfferForm from "./containers/OfferForm";
import ItemPage from "./containers/ItemPage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
var jwtDecode = require('jwt-decode');
const API = "https://ibarter.herokuapp.com/api/";

class App extends Component {
	state = {
		isLogged: false,
		items: [],
		itemForm: new FormData(),
		currentUser: {
			items: []
		},
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
          "https://uploads-learn.s3.amazonaws.com/uploads/identities/learn_account/avatar/f4738c2e-a40a-47be-9734-ce9c5169075d/avatar.png",
				item: {
					id: 1,
					image_urls:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj5vHWF0Ihtq21FIAATMM0C3eEJZKnjf4dqFMQpHlx6Fxtr2nq9Q",
					name: "Tapioca",
					description: "Looks like cocaine, but isn't",
					condition: "good"
				}
			}
		]
	};

	componentDidMount() {
		fetch(`${API}items`)
			.then(resp => resp.json())
			.then(data => {
				this.setState({ items: data });
			});

		this.setCurrentUser(localStorage.getItem("jwt"));
	}

	home = () => {
		return (
			<React.Fragment>
				<Carousel />
				<ItemCardContainer items={this.state.items} />
			</React.Fragment>
		);
  };

	setCurrentUser = jwt => {
		if(jwt){
			fetch(`${API}users/${jwtDecode(jwt).sub}`)
				   .then(resp => resp.json())
				   .then((data) => {
					   this.setState({currentUser: data})
				   })
		} else {
			this.setState({currentUser: {}})
		}
	};

	userPage = () => {
		return <UserPageContainer users={this.state.users} />;
	};

	listItem = () => {
		return (
			<NewItemForm onChange={this.itemOnChange} submit={this.submitItem} />
		);
	};

	makeOffer = (props) => {
		return <OfferForm id={props.match.params.id} items={this.state.currentUser.items}/>;
	}

	login = () => {
		return <Login setCurrentUser={this.setCurrentUser} />;
	};

	logout = () => {
		return <Logout setCurrentUser={this.setCurrentUser} />;
	};

	showItem = props => {
		return <ItemPage id={props.match.params.id} />;
	};

	signUp = props => {
		return <SignUpForm setCurrentUser={this.setCurrentUser} />;
  };

  render() {
    return (
      <>
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:200&display=swap"
          rel="stylesheet"
        />
        <Router>
			<NavBar />
			<div id="content">
				<Route path="/" exact component={this.home} />
				<Route path="/list-item" component={this.listItem} />
				<Route path="/login" component={this.login} />
				<Route path="/logout" component={this.logout} />
				<Route path="/signup" component={this.signUp} />
				<Route path="/items/:id" component={this.showItem} />
				<Route path="/userpage" component={this.userPage} />
				<Route path="/make-offer/:id" component={this.makeOffer} />
			</div>
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
