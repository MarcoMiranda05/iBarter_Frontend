import React, { Component } from "react";

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
      postcode
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
          <div>
            <div className="item-card">
              <img
                src={
                  "https://www.gourmetfoodworld.com/images/Product/large/tapioca-flour-tapioca-starch-1S-1925.jpg"
                }
              />
              <div className="card-details" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserPage;

// id: 1,
//         first_name: "Pat",
//         last_name: "Santucci",
//         email: "isuckatcambio@santucci.com",
//         addr1: "-1 Cambio Road",
//         town: "Cambioville",
//         county: "Cambioshire",
//         postcode: "ER00R4",
//         profile_pic:
