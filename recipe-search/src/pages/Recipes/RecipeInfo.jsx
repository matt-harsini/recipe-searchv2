import React from "react";
import { useParams, useLocation } from "react-router-dom";
import styles from "./RecipeInfo.module.css";

function RecipeInfo() {
  const { recipeID } = useParams();
  const location = useLocation();
  const data = location.state;
  console.log(data);
  return <article className={styles.recipeInfo}>RecipeInfo</article>;
}

export default RecipeInfo;
