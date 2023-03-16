import React, { useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import styles from "./RecipeInfo.module.css";
import { useOutletContext } from "react-router-dom";
function RecipeInfo() {
  const { recipeID } = useParams();
  const location = useLocation();
  const data = location.state;
  console.log(data.ingredientLines);
  const ref = useOutletContext();
  useEffect(() => {
    ref[1].current.style.background = "#212529";
    return () => {
      ref[1].current.style.background = "";
    };
  }, []);
  return (
    <article className={styles.recipeInfo}>
      <section className={styles.container}>
        <UnorderedList className={styles.ingredients}>
          {data.ingredientLines.map((ingredient, i) => {
            console.log(ingredient);
            return <ListItem key={ingredient}>{ingredient}</ListItem>;
          })}
        </UnorderedList>
        <Link to="/search-recipes">Back to search</Link>
      </section>
    </article>
  );
}

export default RecipeInfo;
