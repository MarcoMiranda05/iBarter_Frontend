import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

const NavBar = props => {
  const toggleSignInSignOut = () => {
    return localStorage.getItem("jwt") ? (
      <React.Fragment>
        <li className="nav-item">
          <NavLink exact className="nav-link" to="/logout">
            Log Out
          </NavLink>
        </li>
        <li className="login">
          <div>
            <li className="welcome">Welcome, </li>
            <li className="name">Stranger!</li>
          </div>
        </li>
      </React.Fragment>
    ) : (
      <li className="nav-item">
        <NavLink
          exact
          className="nav-link"
          activeClassName="active"
          to="/login"
        >
          Log In
        </NavLink>
      </li>
    );
  };

  return (
    <div className="navbar">
      <ul>
        <li>
          <img
            src="https://i.imgur.com/YIAIc4Q.png"
            alt="logo"
            className="logo"
          />
        </li>
        <li>
          <a href="/">Home</a>
        </li>

        <li className="categories">
          <a className="dropbtn">Categories</a>
          <div className="categories-content">
            <a value="Link 1">Link 1</a>
            <a value="Link 1">Link 2</a>
            <a value="Link 1">Link 3</a>
          </div>
        </li>
        <li>
          <div className="search-bar-container">
            <label>Search:</label>
            <input
              type="search"
              placeholder="Search..."
              className="search-bar"
            />
          </div>
        </li>
        {toggleSignInSignOut()}
      </ul>
    </div>
  );
};

export default NavBar;
