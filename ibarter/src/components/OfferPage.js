import React, { Component } from "react";

class OfferPage extends Component {
  state = {
    accepted: this.props.offer.accepted
  };

  acceptOffer = () => {
    this.setState({ accepted: true });
  };

  rejectOffer = () => {
    alert("Offer has been rejected");
  };

  render() {
    return (
      <div className="offer-page">
        <div className="item-card-1">
          <img src={this.props.offer.item.image_urls} />
          <div className="gradient" />
          <div className="card-front">
            <span>
              <h2>{this.props.offer.item.name}</h2>
              <div className="hl" />
              <p>{this.props.offer.item.description}</p>
            </span>
          </div>
          <div className="card-details">
            <h3>
              <span className="pink">Condition:</span>{" "}
              {this.props.offer.item.condition}
            </h3>
          </div>
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
              <p className="inline"> {this.props.offer.message}</p>
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
        <div className="item-card-2">
          <img src={this.props.offer.item.image_urls} />
          <div className="gradient" />
          <div className="card-front">
            <span>
              <h2>{this.props.offer.item.name}</h2>
              <div className="hl" />
              <p>{this.props.offer.item.description}</p>
            </span>
          </div>
          <div className="card-details">
            <h3>
              <span className="pink">Condition:</span>{" "}
              {this.props.offer.item.condition}
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default OfferPage;
