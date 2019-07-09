import React from 'react'
const API = "https://ibarter.herokuapp.com";

const ItemSelector = (props) => {
	const style = {
		"box-shadow": props.item.selected ? "inset 0px 0px 0px 10px #ed5941" : ""
	}
	return (
		<div
			className="item-selector"
			onClick={(e) => { props.onClick(e, props.item) }}
		>
			<img src={`${API}${props.item.image_urls[0]}`}/>
			<div className="overlay" style={style} />
		</div>
	)
}

export default ItemSelector;
