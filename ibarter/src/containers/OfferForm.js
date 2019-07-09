import React from 'react'
import ItemSelector from '../components/ItemSelector'
import { withRouter } from "react-router";

const API = "https://ibarter.herokuapp.com/api/";

class OfferForm extends React.Component {
	state = {
		message: "",
		itemIds: []
	}

	onChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}

	handleSubmit = (e) => {
		
	}      

	render() {
		return (
			<>
				<div className="left">
					{
						this.props.items.map((item) => {
							return <ItemSelector item={item} />
						})
					}
				</div>
				<div className="form right">
					<h1>Make Offer</h1>
					<label name="message">Message: </label>
					<textarea rows="4" name="message" onChange={this.onChange} />
					<div id="button-container">
						<button onClick={this.handleSubmit}>Submit</button>
					</div>
				</div>
			</>
		);
	}
}

export default withRouter(OfferForm);
