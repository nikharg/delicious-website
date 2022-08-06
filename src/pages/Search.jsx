import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState([]);
  let params = useParams();
  const getSearch = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipies = await data.json();
    setSearch(recipies.results);
  };
  useEffect(() => {
    getSearch(params.search);
  }, [params.search]);
  return (
    <div>
      <h1 id="search-result">Search results for: {params.search}</h1>
      <div className="grid">
        {search.map((item) => {
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
      </div>
    </div>
  );
};

export default Search;
