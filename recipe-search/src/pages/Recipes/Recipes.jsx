import React, { useEffect, useState } from "react";
import { useFetchRecipe } from "../../hooks/useFetchRecipe";
import styles from "./Recipes.module.css";
import Card from "../../components/ui/Card";
import { default_data } from "../../data";
function Recipes() {
  const [query, setQuery] = useState("");
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(input);
  };
  const { data, isLoading, isError } = useFetchRecipe(query);
  console.log(data);
  if (query != "" && isLoading) return <h1>Loading...</h1>;
  return (
    <div className={styles.recipes}>
      <aside className={styles.sidebar}>
        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter recipe"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
            />
            <button>Search</button>
          </form>
        </div>
      </aside>
      <section className={styles.cardContainer}>
        {data.hits.length &&
          data.hits.map((recipe) => {
            return (
              <Card
                innerRef={null}
                recipe={recipe.recipe}
                key={recipe.recipe.uri}
              />
            );
          })}
      </section>
    </div>
  );
}
export default Recipes;
