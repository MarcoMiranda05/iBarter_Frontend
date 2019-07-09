import React from "react";
import { Link } from "react-router-dom";

const API = "https://ibarter.herokuapp.com/";

const ItemCard = props => {
  const { item } = props;
  return (
    <Link to={`/items/${item.id}`}>
      <div className="item-card">
        <img src={`${API}${item.image_urls[0]}`} />
        <div className="gradient" />
        <div className="card-front">
          <span>
            <h2>{item.name}</h2>
            <div className="hl" />
            <p>{item.description}</p>
          </span>
        </div>
        <div className="card-details">
          <h3>
            <span className="pink">Condition:</span> {item.condition}
          </h3>
          <h3>
            <span className="pink">User:</span> {item.user.id}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
