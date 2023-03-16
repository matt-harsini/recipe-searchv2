import React, { useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { UnorderedList } from "@chakra-ui/react";
import styles from "./RecipeInfo.module.css";
import { useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";
import { PieChart } from "react-minimal-pie-chart";

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
  console.log(data);
  return (
    <article className={styles.recipeInfo}>
      <section className={styles.container}>
        <img src={data.image} alt={data.label} />
        <UnorderedList className={styles.ingredients}>
          {data.ingredientLines.map((ingredient, i) => {
            console.log(ingredient);
            return (
              <motion.li
                key={ingredient}
                variants={{
                  hidden: (i) => ({
                    y: -25 * i,
                    opacity: 0,
                  }),
                  visible: (i) => ({
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      delay: i * 0.025,
                    },
                  }),
                }}
                initial="hidden"
                animate="visible"
                custom={i}
              >
                {ingredient}
              </motion.li>
            );
          })}
        </UnorderedList>
        <a href={data.url}>Instructions</a>
        <Link to="/search-recipes">Back to search</Link>
      </section>
    </article>
  );
}

export default RecipeInfo;
