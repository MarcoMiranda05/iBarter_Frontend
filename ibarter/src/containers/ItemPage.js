import React from 'react';

const API = "https://ibarter.herokuapp.com/api/items/";

class ItemPage extends React.Component {

	state = {
		item: {}
	}

	componentDidMount() {
		fetch(`${API}${this.props.id}`)
			.then(resp => resp.json())
			.then((data) => {
				console.log(data);
				this.setState({item: data})
			})
	}

	render() {
		return (
			<h1>{this.state.item.name}</h1>
		)
	}
}

export default ItemPage;
