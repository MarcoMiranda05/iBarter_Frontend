import React from 'react';

class NewItemForm extends React.Component {

	render() {
		return (
			<div>
				<h1>List A New Item:</h1>
				<label name="name">Item Name:</label>
				<input name="name" type="text" onChange={this.props.onChange}/>
				<label name="description">Item Description:</label>
				<input name="description" type="text" onChange={this.props.onChange}/>
				
				<label name="condition">Item Condition:</label>
				<select name="condition" onChange={this.props.onChange}>
					<option value="new">New</option>
					<option value="worn">Worn</option>
					<option value="damaged">Damaged</option>
					<option value="broken">Broken</option>
				</select>
				<input type="file" name="images" accept="image/*" onChange={this.props.onChange}/>
				<button onClick={this.props.submit}>Submit</button>
			</div>
		);
	}

}

export default NewItemForm;
