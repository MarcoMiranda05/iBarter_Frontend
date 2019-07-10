import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import ItemCardContainer from "./containers/ItemCardContainer";
import UserPage from "./components/UserPage";
import NewItemForm from "./containers/NewItemForm";
import Login from "./containers/Login";
import Logout from "./components/Logout";
import SignUpForm from "./containers/SignUpForm";
import OfferForm from "./containers/OfferForm";
import ItemPage from "./containers/ItemPage";
import OffersContainer from "./containers/OffersContainer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutUs from "./components/AboutUs";
var jwtDecode = require("jwt-decode");
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
		],
		offerForm: {
			item_id: "",
			items: []
		},
		offers: [
			{
				accepted: false,
				message: "cool cool cool",
				item: {
					image_urls:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj5vHWF0Ihtq21FIAATMM0C3eEJZKnjf4dqFMQpHlx6Fxtr2nq9Q",
					name: "Tapioca",
					description: "Looks like cocaine, but isn't",
					condition: "good"
				}
			}
		]
	};

	//Offer form stuff

	offerFormOnChange = e => {
		const form = { ...this.state.offerForm };
		form[e.target.name] = e.target.value;
		this.setState({ offerForm: form });
	};

	setOfferFormState = () => {
		const form = { ...this.state.offerForm };
		form["items"] = this.state.currentUser.items;
		this.setState({ offerForm: form });
	};

	offerFormSelectItem = (e, selectedItem) => {
		const form = { ...this.state.offerForm };
		const index = form.items.findIndex(item => {
			return item.id == selectedItem.id;
		});
		form.items[index].selected = form.items[index].selected ? false : true;
		this.setState({ offerForm: form });
	};

	offerFormHandleSubmit = id => {
		const body = {
			offer: {}
		};

		const item_ids = this.state.offerForm.items
							 .filter(item => item.selected)
							 .map(item => item.id);

		if (item_ids.length < 1) {
			alert("Must select at least 1 item!");
			return;
		}

		body.offer.item_ids = item_ids;
		body.offer.message = this.state.offerForm.message;

		let token = "Bearer " + localStorage.getItem("jwt");
		fetch(`${API}items/${id}/offer`, {
			method: "POST",
			headers: {
				Authorization: token,
				"Content-Type": "application/json",
				Accept: "application/json"
			},
			body: JSON.stringify(body)
		})
			.then(resp => resp.json)
			.then(console.log);
	};

	//End of offer form stuff

	onUserSet = () => {
		this.setOfferFormState();
	};

	componentDidMount() {
		fetch(`${API}items`)
			.then(resp => resp.json())
			.then(data => {
				this.setState({ items: data });
			});

		if (localStorage.getItem("jwt")) {
			this.setCurrentUser(localStorage.getItem("jwt")).then(() => {
				this.onUserSet();
			});
		}
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
		if (jwt) {
			return fetch(`${API}users/${jwtDecode(jwt).sub}`)
				.then(resp => resp.json())
				.then(data => {
					this.setState({ currentUser: data });
				});
		} else {
			this.setState({ currentUser: {} });
		}
	};

	userPage = (props) => {
		return <UserPage id={props.match.params.id}/>;
	};

	listItem = () => {
		return (
			<NewItemForm onChange={this.itemOnChange} submit={this.submitItem} />
		);
	};

	makeOffer = props => {
		return (
			<OfferForm
			id={props.match.params.id}
			onChange={this.offerFormOnChange}
			offerForm={this.state.offerForm}
			selectItem={this.offerFormSelectItem}
			handleSubmit={this.offerFormHandleSubmit}
			/>
		);
	};

	offerPage = () => {
		return <OffersContainer offers={this.state.offers} />;
	};

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

	aboutUsPage = () => {
		return <AboutUs />;
	};

	render() {
		return (
			<>
				<link
				href="https://fonts.googleapis.com/css?family=Raleway:200&display=swap"
				rel="stylesheet"
				/>
				<Router>
					<NavBar currentUser={this.state.currentUser} />
					<div id="content">
						<Route path="/" exact component={this.home} />
						<Route path="/list-item" component={this.listItem} />
						<Route path="/login" component={this.login} />
						<Route path="/logout" component={this.logout} />
						<Route path="/signup" component={this.signUp} />
						<Route path="/items/:id" component={this.showItem} />
						<Route path="/users/:id" component={this.userPage} />
						<Route path="/make-offer/:id" component={this.makeOffer} />
						<Route path="/offer" component={this.offerPage} />
						<Route path="/about-us" component={this.aboutUsPage} />
					</div>
				</Router>
				<Footer />
			</>
		);
	}
}

export default App;
