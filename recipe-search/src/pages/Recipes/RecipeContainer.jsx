import React from "react";
import styles from "./Recipes.module.css";
function RecipeContainer(props) {
  if (props.isError) return <h1>Error...</h1>;
  if (props.query != "" && props.isLoading) return <h1>Loading...</h1>;
  return <section className={styles.cardContainer}>{props.children}</section>;
}

export default RecipeContainer;
