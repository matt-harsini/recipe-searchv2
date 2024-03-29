import React from "react";
import styles from "./Recipes.module.css";
import Loading from "../../components/loading/Loading";
import { Center } from "@chakra-ui/react";

function RecipeContainer(props) {
  if (props.isError) {
    return (
      <Center>
        <h1 className={styles.error}>
          Your request limit has been reached, please try again later.
        </h1>
      </Center>
    );
  }
  if (props.query != "" && props.isLoading) return <Loading />;
  if (!props.data.hits.length) {
    return (
      <Center>
        <h1 className={styles.error}>
          No results found, please adjust filters or try a different search.
        </h1>
      </Center>
    );
  }
  return <section className={styles.cardContainer}>{props.children}</section>;
}

export default RecipeContainer;
