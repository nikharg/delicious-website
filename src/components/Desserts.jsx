import React, { useEffect, useState } from "react";
// import "./dessert.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
const Desserts = () => {
  const [dessert, setDessert] = useState([]);
  useEffect(() => {
    getDessert();
  }, []);

  const getDessert = async () => {
    const check = localStorage.getItem("dessert");
    if (check) {
      setDessert(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=dessert`
      );
      const data = await api.json();
      localStorage.setItem("dessert", JSON.stringify(data.recipes));
      setDessert(data.recipes);
    }
  };

  return (
    <div>
      <div className="veg-wrapper">
        <h1 className="veg-title">Desserts</h1>
        <Splide
          options={{
            perPage: 3,
            pagination: false,
            drag: "free",
            gap: "2.5rem",
          }}
        >
          {dessert.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <div className="card">
                  <Link to={"/recipe/" + recipe.id}>
                    <p className="dish-title">{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <div className="gradient"></div>
                  </Link>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default Desserts;
