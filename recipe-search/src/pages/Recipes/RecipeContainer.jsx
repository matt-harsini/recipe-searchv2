import React from "react";
import styles from "./Recipes.module.css";
import Loading from "../../components/loading/Loading";

function RecipeContainer(props) {
  if (props.isError) return <h1>Error...</h1>;
  if (props.query != "" && props.isLoading) return <Loading />;
  return <section className={styles.cardContainer}>{props.children}</section>;
}

export default RecipeContainer;
