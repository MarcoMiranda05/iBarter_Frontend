import React from 'react'

const ItemCard = (props) => {
	const { item } = props
	return (
		<div className="item-card">
			<img src={`https://ibarter.herokuapp.com/${item.image_urls[0]}`} />
			<div className="gradient" />
			<div className="card-front">
				<span>
					<h2>{item.name}</h2>
					<div className="hl" />
					<p>{item.description}</p>
				</span>
			</div>
			<div className="card-details">
				<h3><span class="pink">Condition:</span> {item.condition}</h3>
			</div>
		</div>
	);
}

export default ItemCard;
