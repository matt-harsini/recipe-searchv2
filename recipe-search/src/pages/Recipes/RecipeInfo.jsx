import React, { useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { UnorderedList } from "@chakra-ui/react";
import styles from "./RecipeInfo.module.css";
import { useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";
import { useAnimateOnView } from "../../hooks/useAnimateOnView";
import { MdOpenInNew } from "react-icons/md";
import { Button } from "@chakra-ui/react";
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
    <main className={styles.main}>
      <section className={styles.section}>
        <Button
          size="lg"
          bg="#212529"
          color="white"
          _hover={{
            background: "#111827",
          }}
          _active={{
            background: "#f03e3e",
          }}
          className={styles.btn}
        >
          <a href={data.url} className={styles.links}>
            <span>Instructions</span>
            <MdOpenInNew className={styles.openIcon} />
          </a>
        </Button>
        <Button
          bg="#212529"
          color="white"
          _hover={{
            background: "#111827",
          }}
          _active={{
            background: "#f03e3e",
          }}
          className={styles.btn}
        >
          <Link to="/search-recipes" className={styles.links}>
            Back to search
          </Link>
        </Button>
        <UnorderedList className={styles.ingredients} spacing={5}>
          {data.ingredientLines.map((ingredient, i) => {
            console.log(ingredient);
            return (
              <motion.li
                key={ingredient}
                variants={{
                  hidden: (i) => ({
                    y: 25 * i,
                    opacity: 0,
                  }),
                  visible: (i) => ({
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      bounce: 0.1,
                      delay: i * 0.025,
                    },
                  }),
                }}
                initial="hidden"
                animate="visible"
                custom={i}
                className={styles.liItem}
              >
                {ingredient.replace("*", "")}
              </motion.li>
            );
          })}
        </UnorderedList>
        <img
          src={data.images.SMALL.url}
          alt={data.label}
          width={data.images.SMALL.width}
          height={data.images.SMALL.height}
        />
      </section>
    </main>
  );
}

export default RecipeInfo;
