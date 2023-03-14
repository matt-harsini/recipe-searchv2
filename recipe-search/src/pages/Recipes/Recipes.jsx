import React, { useEffect, useState } from "react";
import { useFetchRecipe } from "../../hooks/useFetchRecipe";
import { motion } from "framer-motion";
import styles from "./Recipes.module.css";
import Card from "../../components/ui/Card";
import RecipeContainer from "./RecipeContainer";
import { useOutletContext } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

function Recipes() {
  const [query, setQuery] = useState("");
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(input);
  };
  const { data, isLoading, isError } = useFetchRecipe(query);
  const ref = useOutletContext();
  useEffect(() => {
    ref[1].current.style.background = "#212529";
    return () => {
      ref[1].current.style.background = "";
    };
  }, []);
  return (
    <div className={styles.recipes}>
      <div className={styles.searchbar}>
        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter recipe"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className={styles.inputField}
              required
            />
            <motion.button
              className={styles.searchBtn}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <AiOutlineSearch className={styles.searchIcon} />
            </motion.button>
          </form>
        </div>
      </div>
      <RecipeContainer isLoading={isLoading} isError={isError} query={query}>
        {!!data.hits.length &&
          data.hits.map((recipe) => {
            return <Card recipe={recipe.recipe} key={recipe.recipe.uri} />;
          })}
      </RecipeContainer>
    </div>
  );
}
export default Recipes;
