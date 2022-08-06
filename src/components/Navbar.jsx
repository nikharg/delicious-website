import React, { useState } from "react";
import { GiKnifeFork } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import "./navbar.css";
import Cuisine from "./Cuisine";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [input, setInput] = useState("");
  const updateInput = (e) => {
    setInput(e.target.value);
  };
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/search/" + input);
  };

  return (
    <div className="navbar">
      <div className="nav-title">
        <NavLink to="/" className="nav-title">
          <GiKnifeFork className="icon" />
          <h1>Delicious</h1>
        </NavLink>
      </div>
      <form className="searchbar" onSubmit={submitHandler}>
        <input type="text" value={input} onChange={updateInput} />
        <AiOutlineSearch className="search" />
      </form>
      <div className="cuisine-bar">
        <Cuisine />
      </div>
    </div>
  );
};

export default Navbar;
