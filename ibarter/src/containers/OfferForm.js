import React from "react";
import ItemSelector from "../components/ItemSelector";
import { withRouter } from "react-router";

const API = "https://ibarter.herokuapp.com/api/";

class OfferForm extends React.Component {
  render() {
    return (
      <>
        <div className="left">
          <div id="item-selector-container">
            {this.props.offerForm.items.map(item => {
              return (
                <ItemSelector item={item} onClick={this.props.selectItem} />
              );
            })}
          </div>
        </div>
        <div className="right">
          <div className="form">
            <h1>Make Offer</h1>
            <label name="message">Message: </label>
            <textarea rows="4" name="message" onChange={this.props.onChange} />
            <div id="button-container">
              <button
                onClick={() => {
                  this.props.handleSubmit(this.props.id);
                  this.props.history.push("/");
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(OfferForm);
