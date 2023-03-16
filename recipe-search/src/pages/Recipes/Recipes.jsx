import React, { useEffect, useState } from "react";
import { useFetchRecipe } from "../../hooks/useFetchRecipe";
import styles from "./Recipes.module.css";
import Card from "../../components/ui/Card";
import RecipeContainer from "./RecipeContainer";
import { useOutletContext } from "react-router-dom";
import {
  Button,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

function Recipes() {
  const [query, setQuery] = useState(
    localStorage.getItem("Query") != "" ? localStorage.getItem("Query") : ""
  );
  const [input, setInput] = useState("");
  const { data, isLoading, isError } = useFetchRecipe(query);
  const ref = useOutletContext();
  useEffect(() => {
    ref[1].current.style.background = "#212529";
    return () => {
      ref[1].current.style.background = "";
    };
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(input);
  };
  return (
    <div className={styles.recipes}>
      <div className={styles.searchbar}>
        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Enter recipe"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              variant="flushed"
              size="lg"
              className={styles.inputField}
              required
            />
            <Button
              size="lg"
              variant="solid"
              className={styles.btn}
              type="submit"
              bg="#212529"
              color="white"
              _hover={{
                background: "#495057",
              }}
              _active={{
                background: "#f03e3e",
              }}
            >
              <span className={styles.btnLabel}>Search</span>
            </Button>
          </form>
        </div>
      </div>
      <RecipeContainer isLoading={isLoading} isError={isError} query={query}>
        {!!data.hits.length &&
          data.hits.map((recipe) => {
            return <Card recipe={recipe.recipe} key={recipe.recipe.uri} />;
          })}
        {!!data.hits.length || <h1>No results found</h1>}
      </RecipeContainer>
    </div>
  );
}
export default Recipes;
