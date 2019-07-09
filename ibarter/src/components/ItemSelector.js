import React from 'react'

const ItemSelector = (props) => {
	return(
		<div onClick={props.onClick}>
			<img src={props.item.image_urls[0]} />
		</div>
	)
}

export default ItemSelector;
