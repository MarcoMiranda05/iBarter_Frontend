import React from "react";

const NavBar = props => {
  const toggleSignInSignOut = () => {
    if (props.isLogged) {
      return (
        <li className="login">
          <a className="welcome">Welcome,</a>
          <a className="name">Stranger</a>
          <button>Logout</button>
        </li>
      );
    } else {
      return (
        <li className="login">
          <button>Login</button>
          <button>Signup</button>
        </li>
      );
    }
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
          <a href="home">Home</a>
        </li>

        <li class="categories">
          <a class="dropbtn">Categories</a>
          <div class="categories-content">
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
