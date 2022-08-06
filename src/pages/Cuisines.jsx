import React, { useEffect, useState } from "react";
import "./cuisines.css";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const Cuisines = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipies = await data.json();
    setCuisine(recipies.results);
  };
  useEffect(() => {
    console.log(params.type);
    getCuisine(params.type);
  }, [params.type]);

  return (
    <motion.div
      className="grid"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((item) => {
        return (
          <div className="card" key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <p className="dish-title">{item.title}</p>
              <img src={item.image} alt={item.title} />
              <div className="gradient"></div>
            </Link>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Cuisines;
