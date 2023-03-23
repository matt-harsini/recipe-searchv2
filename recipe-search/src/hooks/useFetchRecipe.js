import { useState, useEffect } from "react";
import { default_data } from "../data/";

export function useFetchRecipe(query) {
  const API_ID = "9c96dddd";
  const API_KEY = "5ed5da612fdc934ee0dbfb39d541b822";
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(default_data);
  const [originalData, setOriginalData] = useState(data);
  const filters = JSON.parse(localStorage.getItem("Filters"));
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
  if (filters?.length) {
    return {
      data: {
        _links: {},
        hits: originalData.hits.filter(({ recipe }) => {
          return filters.every((label) => recipe.healthLabels?.includes(label));
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
