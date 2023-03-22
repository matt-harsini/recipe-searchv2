import { useState, useEffect } from "react";
import { default_data } from "../data/";

function sortHelper(payload, sort) {
  console.log("in here");
  switch (sort) {
    case "Calories: High to Low":
      payload.data.sort((a, b) =>
        a.recipe.calories / a.recipe.yield > b.recipe.calories / b.recipe.yield
          ? -1
          : 1
      );
      break;
    case "Calories: Low to High":
      payload.data.sort((a, b) =>
        a.recipe.calories / a.recipe.yield < b.recipe.calories / b.recipe.yield
          ? -1
          : 1
      );
      break;
    case "Protein: High to Low":
      payload.data.sort((a, b) =>
        Math.round(a.recipe.digest[2].total / a.recipe.yield) >
        Math.round(b.recipe.digest[2].total / b.recipe.yield)
          ? -1
          : 1
      );
      break;
    case "Protein: Low to High":
      payload.data.sort((a, b) =>
        Math.round(a.recipe.digest[2].total / a.recipe.yield) <
        Math.round(b.recipe.digest[2].total / b.recipe.yield)
          ? -1
          : 1
      );
      break;
    case "Fat: High to Low":
      payload.data.sort((a, b) =>
        Math.round(a.recipe.digest[0].total / a.recipe.yield) >
        Math.round(b.recipe.digest[0].total / b.recipe.yield)
          ? -1
          : 1
      );
      break;
    case "Fat: Low to High":
      payload.data.sort((a, b) =>
        Math.round(a.recipe.digest[0].total / a.recipe.yield) <
        Math.round(b.recipe.digest[0].total / b.recipe.yield)
          ? -1
          : 1
      );
      break;
    case "Carbs: High to Low":
      payload.data.sort((a, b) =>
        Math.round(a.recipe.digest[1].total / a.recipe.yield) >
        Math.round(b.recipe.digest[1].total / b.recipe.yield)
          ? -1
          : 1
      );
      break;
    case "Carbs: Low to High":
      payload.data.sort((a, b) =>
        Math.round(a.recipe.digest[1].total / a.recipe.yield) <
        Math.round(b.recipe.digest[1].total / b.recipe.yield)
          ? -1
          : 1
      );
      break;
  }
}

export function useFetchRecipe(query) {
  const API_ID = "9c96dddd";
  const API_KEY = "5ed5da612fdc934ee0dbfb39d541b822";
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(default_data);
  const [originalData, setOriginalData] = useState(data);
  const filters = JSON.parse(localStorage.getItem("Filters"));
  const sort = localStorage.getItem("Sort");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
        );
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const data = await response.json();
        setData(data);
        setOriginalData(data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    if (query === "") return;
    setIsLoading(true);
    localStorage.setItem("Query", query);
    fetchData();
  }, [query]);
  if (filters.length && sort) {
    console.log("In here");
  }
  if (filters.length) {
    return {
      data: {
        _links: {},
        hits: originalData.hits.filter(({ recipe }) => {
          return filters.every((label) => recipe.healthLabels.includes(label));
        }),
      },
      originalData,
      setData,
      isLoading,
      isError,
    };
  }
  return { data, originalData, setData, isLoading, isError };
}
