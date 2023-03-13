import React from "react";
import { useParams } from "react-router-dom";
import styles from "./RecipeInfo.module.css";

function RecipeInfo() {
  const { recipeID } = useParams();
  return <article className={styles.recipeInfo}>RecipeInfo</article>;
}

export default RecipeInfo;
