import React, { Component } from "react";
import ItemCard from "./ItemCard";
import NewItemForm from "../containers/NewItemForm";
import { Link } from 'react-router-dom'

const API = "https://ibarter.herokuapp.com/api/";

class UserPage extends Component {
	state = {
		user: {
			incoming_offers: [],
			items: []
		}
	}

	componentDidMount() {
		fetch(`${API}users/${this.props.id}`)
			.then(resp => resp.json())
			.then((data) => {
				this.setState({user: data})
			})
	}
	render() {
		const {
			first_name,
			profile_pic,
			last_name,
			email,
			addr1,
			town,
			county,
			postcode,
			items,
			incoming_offers
		} = this.state.user;
		return (
			<div className="user-page">
				<h1 className="user-page-name">{first_name}'s Page</h1>
				<div className="user-inbox">
					<h2>INBOX</h2>
					<div className="offers-lines">
						{
							incoming_offers.map((offer) => {
								return (
									<Link to={`/offers/${offer.id}`}>
										<p>{offer.message}</p>
									</Link>
								)
							})
						}
					</div>
				</div>
				<div className="user-card">
					<img src={profile_pic} alt="profile_pic" className="profile_pic" />
					<div className="user-info">
						<h2>
							{first_name} {last_name}
						</h2>
						<a href={"mailto:" + email}>{email}</a>
						<div className="lines">
							<p className="title">Address:</p>
							<p className="inline"> {addr1}</p>
						</div>
						<div className="lines">
							<p className="title">Town:</p>
							<p className="inline"> {town}</p>
						</div>
						<div className="lines">
							<p className="title">County:</p>
							<p className="inline"> {county}</p>
						</div>
						<div className="lines">
							<p className="title">Postcode:</p>
							<p className="inline"> {postcode}</p>
						</div>
					</div>
				</div>
				{
					items.map((item) => {
						return (
							<ItemCard item={{...item, user: {id: this.props.id}}} />
						)
					})
				}
			</div>
		);
	}
}

export default UserPage;
