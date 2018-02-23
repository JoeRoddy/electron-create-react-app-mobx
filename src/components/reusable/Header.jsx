import React from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Welcome to React/Electron</h2>
    <div>
      <Link to={"/"}>Home</Link> -|-
      <Link to={"/todos"}>Todo List</Link>
    </div>
  </div>
);

export default Header;
