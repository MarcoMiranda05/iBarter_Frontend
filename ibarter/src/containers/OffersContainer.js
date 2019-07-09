import React, { Component } from "react";
import OfferPage from "../components/OfferPage";

class OffersContainer extends Component {
  render() {
    return (
      <div>
        {this.props.offers.map(offer => {
          return <OfferPage key={offer.id} offer={offer} />;
        })}
      </div>
    );
  }
}

export default OffersContainer;
