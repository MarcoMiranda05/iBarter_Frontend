import React, { Component } from "react";

class AboutUs extends Component {
  render() {
    return (
      <div className="about-us">
        <div>
          <p className="question">What is the iBarter?</p>
          <p>
            We are an app that connects people with the same interest: trade
            items. To use the iBarter is very simple and you just have to follow
            the simple no money involved rule.
          </p>
        </div>
        <div>
          <p className="question">What do I need to place an offer?</p>
          <p>
            You will need to have at least one item listed as well. On iBarter
            you literally need to offer one item to trade for what you are
            looking for.
          </p>
        </div>
        <div>
          <p className="question">What the conditions means?</p>
          <p>
            As a trading app, we do our best to certify that you are receiving
            the correct information about the item that you want to trade for
            it. This is why we have defined five categories of conditions:
          </p>
          <p className="question">New</p>
          <p>Still on the box or barely used item.</p>
          <p className="question">Good</p>
          <p>
            The item can be found in a very good state, but still is used for a
            certain amount of time.
          </p>
          <p className="question">Worn</p>
          <p>
            Clear signs of usage, but in fair conditions to serve the new owner
            without any problem.
          </p>
          <p className="question">Damaged</p>
          <p>
            The item has damage spots like a broken screen or deep scratches but
            still is functional.
          </p>
          <p className="question">Broken</p>
          <p>It isn't working.</p>
        </div>
      </div>
    );
  }
}

export default AboutUs;
