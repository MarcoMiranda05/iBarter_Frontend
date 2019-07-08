import React from 'react';
import Tag from "../components/Tag"

const API = "https://ibarter.herokuapp.com/";

class ItemPage extends React.Component {

	state = {
		item: {}
	}

	componentDidMount() {
		fetch(`${API}api/items/${this.props.id}`)
			.then(resp => resp.json())
			.then((data) => {
				console.log(data);
				this.setState({item: data})
			})
	}

	render() {
		const { item } = this.state
		const tags = ["tag", "wah", "gsag", "safgdgsafasg", "gdasf", "tag", "wah", "gsag", "safgdgsafasg", "gdasf", ]
		return (
			<>
			<h1>{ item.name }</h1>
			<div className="left">
			{
						item.image_urls ? <img id="main-img" src={`${API}${item.image_urls[0]}`} /> : ""
					}
					
				</div>
				<div className="right">
					<h3>Description</h3>
					<p>{ item.description }</p>
					<h3>Condition</h3>
					<p>{ item.condition }</p>
					<h3>Tags</h3>
					<div id="tag-container">
						{
							tags.map((tag, i) => {
								return <Tag tag={tag} key={i} />
							})
						}
					</div>
				</div>
			</>
		)
	}
}

export default ItemPage;