import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./recipe.css";

const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const [active, setActive] = useState(true);
  let params = useParams();
  const getRecipe = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await api.json();
    setRecipe(data);
  };
  useEffect(() => {
    getRecipe();
    // eslint-disable-next-line
  }, [params.name]);

  return (
    <div className="recipe-wrapper">
      <div className="left">
        <p>{recipe.title}</p>
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <div className="right">
        <div className="btns">
          <button
            onClick={() => setActive(true)}
            className={active === true ? "active" : ""}
          >
            <p>Instructions</p>
          </button>
          <button
            onClick={() => setActive(false)}
            className={active === true ? "" : "active"}
          >
            <p>Ingredients</p>
          </button>
        </div>
        {active === true ? (
          <div className="summary">
            <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
            <br />
            <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
          </div>
        ) : (
          <ul>
            {recipe.extendedIngredients.map((ingredient) => {
              return <li key={ingredient.id}>{ingredient.original}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Recipe;
