import React, { useEffect, useState } from "react";
import { useFetchRecipe } from "../../hooks/useFetchRecipe";
import styles from "./Recipes.module.css";
import Card from "../../components/ui/Card";
import RecipeContainer from "./RecipeContainer";
import { useOutletContext } from "react-router-dom";
import {
  Button,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Flex,
  Center,
  Grid,
  Radio,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";

function Recipes() {
  const [query, setQuery] = useState(
    localStorage.getItem("Query") != "" ? localStorage.getItem("Query") : ""
  );
  const [input, setInput] = useState("");
  const { data, isLoading, isError } = useFetchRecipe(query);
  const ref = useOutletContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
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
            <Center>
              <Flex gap={15}>
                <IconButton
                  bg="#212529"
                  _hover={{
                    background: "#111827",
                  }}
                  _active={{
                    background: "#f03e3e",
                  }}
                  aria-label="Search recipes"
                  className={`${styles.btn} ${styles.btnTextIcon}`}
                  icon={<BsSearch />}
                ></IconButton>
                <IconButton
                  ref={btnRef}
                  onClick={onOpen}
                  bg="#212529"
                  _hover={{
                    background: "#111827",
                  }}
                  _active={{
                    background: "#f03e3e",
                  }}
                  aria-label="Filter and sort recipes"
                  className={`${styles.btn} ${styles.btnTextIcon}`}
                  icon={<FiSettings />}
                ></IconButton>
              </Flex>
            </Center>
            <Drawer
              isOpen={isOpen}
              placement="left"
              size="lg"
              onClose={onClose}
              finalFocusRef={btnRef}
              preserveScrollBarGap={true}
            >
              <DrawerOverlay />
              <DrawerContent className={styles.drawer}>
                <DrawerCloseButton />
                <DrawerHeader className={styles.filterHeader}>
                  Sort by
                </DrawerHeader>
                <DrawerBody>
                  <Grid
                    gridTemplateColumns="1fr 1fr"
                    gap={15}
                    alignItems="center"
                  >
                    <Radio size="lg" value="1" onChange={() => {}}>
                      <span className={styles.checkBox}>
                        Protein: High to Low
                      </span>
                    </Radio>
                    <Radio size="lg" value="2" onChange={() => {}}>
                      <span className={styles.checkBox}>
                        Protein: Low to High
                      </span>
                    </Radio>
                    <Radio size="lg" value="3" onChange={() => {}}>
                      <span className={styles.checkBox}>Test</span>
                    </Radio>
                    <Radio size="lg" value="4" onChange={() => {}}>
                      <span className={styles.checkBox}>Radio</span>
                    </Radio>
                    <Radio size="lg" value="5" onChange={() => {}}>
                      <span className={styles.checkBox}>Test</span>
                    </Radio>
                    <Radio size="lg" value="6" onChange={() => {}}>
                      <span className={styles.checkBox}>Radio</span>
                    </Radio>
                    <Radio size="lg" value="7" onChange={() => {}}>
                      <span className={styles.checkBox}>Test</span>
                    </Radio>
                    <Radio size="lg" value="8" onChange={() => {}}>
                      <span className={styles.checkBox}>Radio</span>
                    </Radio>
                  </Grid>
                </DrawerBody>
                <DrawerFooter>
                  <Button
                    size="lg"
                    variant="solid"
                    className={`${styles.btn} ${styles.btnText}`}
                    bg="#212529"
                    color="white"
                    _hover={{
                      background: "#111827",
                    }}
                    _active={{
                      background: "#f03e3e",
                    }}
                    onClick={onClose}
                  >
                    Reset
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
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
