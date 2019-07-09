import React, { Component } from "react";
import ItemCard from "./ItemCard";
import NewItemForm from "../containers/NewItemForm";

class UserPage extends Component {
  render() {
    const {
      first_name,
      profile_pic,
      last_name,
      email,
      addr1,
      town,
      county,
      postcode,
      item
    } = this.props.user;
    return (
      <div className="user-page">
        <h1 className="user-page-name">{first_name}'s Page</h1>
        <div className="user-inbox">
          <h2>INBOX</h2>
          <div className="offers-lines">
            <p>offer</p>
            <p>offer</p>
            <p>offer</p>
            <p>offer</p>
            <p>offer</p>
            <p>offer</p>
            <p>offer</p>
            <p>offer</p>
            <p>offer</p>
            <p>offer</p>
          </div>
        </div>
        <div className="user-card">
          <img src={profile_pic} alt="profile_pic" className="profile_pic" />
          <div className="user-info">
            <h2>
              {first_name} {last_name}
            </h2>
            <a href={"mailto:" + email}>{email}</a>
            <div className="lines">
              <p className="title">Address:</p>
              <p className="inline"> {addr1}</p>
            </div>
            <div className="lines">
              <p className="title">Town:</p>
              <p className="inline"> {town}</p>
            </div>
            <div className="lines">
              <p className="title">County:</p>
              <p className="inline"> {county}</p>
            </div>
            <div className="lines">
              <p className="title">Postcode:</p>
              <p className="inline"> {postcode}</p>
            </div>
          </div>
        </div>
        <div className="item-card">
          <img src={item.image_urls} />
          {/* <img src={`${API}${item.image_urls[0]}`} /> */}
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
          </div>
        </div>
      </div>
    );
  }
}

export default UserPage;
