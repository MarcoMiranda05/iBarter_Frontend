import React from 'react';

const API = "https://ibarter.herokuapp.com/api/";

class NewItemForm extends React.Component {
	
	state = {
		itemForm: new FormData(),
		formSubmitted: false
	};

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
		let token = "Bearer " + localStorage.getItem("jwt");
		fetch(`${API}items`, {
			method: "POST",
			headers: {
				Authorization: token
			},
			body: this.state.itemForm
		}).then (
			()=> {
				this.setState({itemForm: new FormData()})
				this.props.history.push("/");
			}
		)
	}


	render() {
		return (
			<div className="form">
				<h1>List A New Item:</h1>
				<label name="name">Item Name:</label>
				<input name="name" type="text" onChange={this.itemOnChange}/>
				<label name="description">Item Description:</label>
				<input name="description" type="text" onChange={this.itemOnChange}/>
				
				<label name="condition">Item Condition:</label>
				<select name="condition" onChange={this.itemOnChange}>
					<option value="new">New</option>
					<option value="worn">Worn</option>
					<option value="damaged">Damaged</option>
					<option value="broken">Broken</option>
				</select>
				<label name="images">Upload Images:</label>
				<input type="file" name="images" accept="image/*" onChange={this.itemOnChange}/>
				<button onClick={this.submitItem}>Submit</button>
			</div>
		);
	}

}

export default NewItemForm;
