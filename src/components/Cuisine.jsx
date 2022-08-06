import React from "react";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Cuisine = () => {
  return (
    <div className="cuisines">
      <NavLink to={"/cuisine/american"}>
        <div className="cuisine">
          <FaHamburger />
          <p>American</p>
        </div>
      </NavLink>
      <NavLink to={"/cuisine/italian"}>
        <div className="cuisine">
          <FaPizzaSlice />
          <p>Italian</p>
        </div>
      </NavLink>
      <NavLink to={"/cuisine/thai"}>
        <div className="cuisine">
          <GiNoodles />
          <p>Thai</p>
        </div>
      </NavLink>
      <NavLink to={"/cuisine/korean"}>
        <div className="cuisine">
          <GiChopsticks />
          <p>Korean</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Cuisine;
