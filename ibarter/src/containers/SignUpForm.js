import React from "react";
import { withRouter } from "react-router";

const API = "https://ibarter.herokuapp.com/api/";

class SignUpForm extends React.Component {
  state = {
    email: "",
    password: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = () => {
    const request = { auth: this.state };

    fetch(`${API}user_token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(request)
    })
      .then(resp => resp.json())
      .then(data => {
        localStorage.setItem("jwt", data.jwt);
        this.props.setCurrentUser(data.jwt);
        this.props.history.push("/");
      })
      .catch(error => console.log("error", error));
  };

  //   fetch(`${API}user_token`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(request)
  //   })
  //     .then(resp => resp.json())
  //     .then(data => {
  //       localStorage.setItem("jwt", data.jwt);
  //       this.props.setIsLogged(true);
  //       this.props.history.push("/");
  //     })
  //     .catch(error => console.log("error", error));
  // };

  handleSubmit = e => {
    e.preventDefault();
    const request = { user: this.state };

    fetch(`${API}users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(request)
    })
      .then(this.login)
      .catch(error => console.log("error", error));
  };

  render() {
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <label name="email">Email: </label>
        <input name="email" type="email" onChange={this.onChange} />
        <label name="password">Password:</label>
        <input
          name="password"
          id="password"
          type="password"
          onChange={this.onChange}
        />
        <label name="first_name">First Name:</label>
        <input
          name="first_name"
          id="first_name"
          type="text"
          onChange={this.onChange}
        />
        <label name="last_name">Last Name:</label>
        <input
          name="last_name"
          id="last_name"
          type="text"
          onChange={this.onChange}
        />
        <label name="addr1">Address 1:</label>
        <input name="addr1" id="addr1" type="text" onChange={this.onChange} />
        <label name="addr2">Address 2:</label>
        <input name="addr2" id="addr2" type="text" onChange={this.onChange} />
        <label name="town">Town:</label>
        <input name="town" id="town" type="text" onChange={this.onChange} />
        <label name="county">County:</label>
        <input name="county" id="county" type="text" onChange={this.onChange} />
        <label name="postcode">Postcode:</label>
        <input
          name="postcode"
          id="postcode"
          type="text"
          onChange={this.onChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
