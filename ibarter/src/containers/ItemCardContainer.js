import React from 'react';
import ItemCard from '../components/ItemCard';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ItemCardContainer extends React.Component {


	render() {
		return (
			<div id="item-card-container">
			{
				localStorage.getItem("jwt") ?
				<Link to="/list-item/" className="item-card add-card">
					<div>
						<h2>+</h2>
					</div>
				</Link>
				:
				""
			}
			{
				this.props.items.map((item, i) => {
					return <ItemCard item={item} key={i} />
				})
			}
			</div>
		)
	}
}

export default ItemCardContainer;
