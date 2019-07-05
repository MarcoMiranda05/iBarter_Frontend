import React from 'react'

const ItemCard = (props) => {
	const { item } = props
	return (
		<div className="item-card">
			<img src={`https://ibarter.herokuapp.com/${item.image_urls[0]}`} />
			<div className="card-details" />
		</div>
	);
}

export default ItemCard;
