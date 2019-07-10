import React, { Component } from "react";
import ItemCard from "./ItemCard";

const API = "https://ibarter.herokuapp.com/api/";

class OfferPage extends Component {
  state = {
    offer: {
      items: []
    }
  };

  acceptOffer = () => {
    this.setState({ accepted: true });
    alert("Offer has been accepted");
  };

  rejectOffer = () => {
    alert("Offer has been rejected");
  };

  componentDidMount() {
    fetch(`${API}offers/${this.props.id}`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ offer: data });
      });
  }

  myItems = () => {
    return this.state.offer.items.filter(item => {
      return item.user_id == this.props.currentUser.id;
    });
  };

  theirItems = () => {
    return this.state.offer.items.filter(item => {
      return item.user_id != this.props.currentUser.id;
    });
  };

  render() {
    return (
      <div className="offer-page">
        <div className="vertical-flex">
          {this.theirItems().map(item => {
            return <ItemCard item={{ ...item, user: { id: item.owner_id } }} />;
          })}
        </div>
        <div className="offer-details">
          <img
            src="https://i.imgur.com/QuNI42p.png"
            alt="transfer-logo"
            className="trade-image"
          />
          <div className="offer-infos">
            <div className="lines">
              <p className="title">Message:</p>
              <p className="inline"> {this.state.offer.message}</p>
            </div>
            <div className="lines">
              <p className="title">Offer made by:</p>
              <p className="inline"> Stranger</p>
            </div>
            <a href="/userpage">
              <img
                src="https://uploads-learn.s3.amazonaws.com/uploads/identities/learn_account/avatar/f4738c2e-a40a-47be-9734-ce9c5169075d/avatar.png"
                alt="proposer pic"
                className="proposer-pic"
              />
            </a>
            <div className="offer-btns">
              <button onClick={this.acceptOffer}>Accept</button>
              <button onClick={this.rejectOffer}>Reject</button>
            </div>
          </div>
        </div>
        <div className="vertical-flex">
          {this.myItems().map(item => {
            return <ItemCard item={{ ...item, user: { id: item.owner_id } }} />;
          })}
        </div>
      </div>
    );
  }
}

export default OfferPage;
