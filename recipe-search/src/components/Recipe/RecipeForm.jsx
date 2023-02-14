import { useState, useEffect } from "react";
import React from "react";
import Recipes from "./Recipes";
function RecipeForm() {
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("chicken");
  useEffect(() => {
    // fetchRecipeData();
  }, []);
  const fetchRecipeData = async () => {
    const API_ID = "9c96dddd";
    const API_KEY = "5ed5da612fdc934ee0dbfb39d541b822";
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
      RecipeForm
      <Recipes />
    </div>
  );
}

export default RecipeForm;
