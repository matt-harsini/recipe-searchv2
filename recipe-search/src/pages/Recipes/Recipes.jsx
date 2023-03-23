import React, { useEffect, useState, useRef } from "react";
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
  Checkbox,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { motion } from "framer-motion";
import { healthLabels, categories } from "../../data/health_labels";

const filter = new Set();
function sortHelper(sortByValue, setData, data) {
  switch (sortByValue) {
    case "Calories: High to Low":
      setData({
        _links: {},
        hits: data.hits.sort((a, b) =>
          a.recipe.calories / a.recipe.yield >
          b.recipe.calories / b.recipe.yield
            ? -1
            : 1
        ),
      });
      break;
    case "Calories: Low to High":
      setData({
        _links: {},
        hits: data.hits.sort((a, b) =>
          a.recipe.calories / a.recipe.yield <
          b.recipe.calories / b.recipe.yield
            ? -1
            : 1
        ),
      });
      break;
    case "Protein: High to Low":
      setData({
        _links: {},
        hits: data.hits.sort((a, b) =>
          Math.round(a.recipe.digest[2].total / a.recipe.yield) >
          Math.round(b.recipe.digest[2].total / b.recipe.yield)
            ? -1
            : 1
        ),
      });
      break;
    case "Protein: Low to High":
      setData({
        _links: {},
        hits: data.hits.sort((a, b) =>
          Math.round(a.recipe.digest[2].total / a.recipe.yield) <
          Math.round(b.recipe.digest[2].total / b.recipe.yield)
            ? -1
            : 1
        ),
      });
      break;
    case "Fat: High to Low":
      setData({
        _links: {},
        hits: data.hits.sort((a, b) =>
          Math.round(a.recipe.digest[0].total / a.recipe.yield) >
          Math.round(b.recipe.digest[0].total / b.recipe.yield)
            ? -1
            : 1
        ),
      });
      break;
    case "Fat: Low to High":
      setData({
        _links: {},
        hits: data.hits.sort((a, b) =>
          Math.round(a.recipe.digest[0].total / a.recipe.yield) <
          Math.round(b.recipe.digest[0].total / b.recipe.yield)
            ? -1
            : 1
        ),
      });
      break;
    case "Carbs: High to Low":
      setData({
        _links: {},
        hits: data.hits.sort((a, b) =>
          Math.round(a.recipe.digest[1].total / a.recipe.yield) >
          Math.round(b.recipe.digest[1].total / b.recipe.yield)
            ? -1
            : 1
        ),
      });
      break;
    case "Carbs: Low to High":
      setData({
        _links: {},
        hits: data.hits.sort((a, b) =>
          Math.round(a.recipe.digest[1].total / a.recipe.yield) <
          Math.round(b.recipe.digest[1].total / b.recipe.yield)
            ? -1
            : 1
        ),
      });
      break;
  }
}

function Recipes() {
  const [query, setQuery] = useState(
    localStorage.getItem("Query") != "" ? localStorage.getItem("Query") : ""
  );
  const [input, setInput] = useState("");
  const { data, originalData, setData, isLoading, isError } =
    useFetchRecipe(query);
  const ref = useOutletContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [checkedState, setCheckedState] = useState(
    new Array(healthLabels.length).fill(false)
  );
  const [radioState, setRadioState] = useState(
    new Array(categories.length).fill(false)
  );
  useEffect(() => {
    ref[1].current.style.background = "#212529";
    window.scrollTo(0, 0);
    return () => {
      ref[1].current.style.background = "";
    };
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(input);
  };
  const handleSearch = (e) => {
    setRadioState(new Array(categories.length).fill(false));
    localStorage.setItem("Sort", "");
  };
  const handleChange = (position) => {
    const updatedCheckedState = checkedState.map((checkbox, index) => {
      return index === position ? !checkbox : checkbox;
    });
    setCheckedState(updatedCheckedState);
  };
  const handleClear = (e) => {
    localStorage.setItem("Filters", JSON.stringify([]));
    localStorage.setItem("Sort", "");
    setCheckedState(new Array(healthLabels.length).fill(false));
    setRadioState(new Array(categories.length).fill(false));
    setData({
      _links: {},
      hits: originalData.hits,
    });
    filter.clear();
  };
  const handleRadioChange = (position) => {
    const updatedRadioState = radioState.map((_, index) => {
      if (position === index) return true;
      return false;
    });
    setRadioState(updatedRadioState);
  };
  const handleSort = (e) => {
    const sortByValue = e.target.value;
    localStorage.setItem("Sort", JSON.stringify(sortByValue));
    sortHelper(sortByValue, setData, data);
  };
  const handleFilter = (e) => {
    if (e.target.checked) {
      filter.add(e.target.value);
      localStorage.setItem("Filters", JSON.stringify(Array.from(filter)));
      setData({
        _links: {},
        hits: originalData.hits.filter(({ recipe }) => {
          const current_labels = Array.from(filter);
          return current_labels.every((label) =>
            recipe.healthLabels?.includes(label)
          );
        }),
      });
      return;
    }
    filter.delete(e.target.value);
    localStorage.setItem("Filters", JSON.stringify(Array.from(filter)));
    if (filter.size === 0) {
      setData({
        _links: {},
        hits: originalData.hits,
      });
      return;
    }
    setData({
      _links: {},
      hits: originalData.hits.filter(({ recipe }) => {
        const current_labels = Array.from(filter);
        return current_labels.every((label) =>
          recipe.healthLabels?.includes(label)
        );
      }),
    });
  };
  useEffect(() => {
    return () => {
      handleClear();
    };
  }, []);
  return (
    <div className={styles.recipes} ref={ref[2]}>
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
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconButton
                    bg="#212529"
                    _hover={{
                      background: "#ffa94d",
                    }}
                    _active={{
                      background: "#f03e3e",
                    }}
                    aria-label="Search recipes"
                    className={`${styles.btn} ${styles.btnTextIcon} ${styles.motionButton}`}
                    icon={<BsSearch />}
                    type="submit"
                    title="Search"
                    as="span"
                    onClick={handleSearch}
                  ></IconButton>
                </motion.button>
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
                  title="Filter and sort recipes"
                  id="settings-btn"
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
                <DrawerCloseButton className={styles.closeBtn} />
                <DrawerHeader className={styles.filterHeader}>
                  Sort by
                </DrawerHeader>
                <DrawerBody>
                  <Grid
                    gridTemplateColumns="1fr 1fr"
                    gap={15}
                    alignItems="center"
                    onChange={handleSort}
                  >
                    {categories.map((category, index) => {
                      return (
                        <Radio
                          size="lg"
                          value={category}
                          key={category}
                          isChecked={radioState[index]}
                          onChange={() => {
                            handleRadioChange(index);
                          }}
                          marginBottom={5}
                        >
                          <span className={styles.checkBox}>{category}</span>
                        </Radio>
                      );
                    })}
                  </Grid>
                </DrawerBody>
                <DrawerHeader className={styles.filterHeader}>
                  Filter by
                </DrawerHeader>
                <DrawerBody className={styles.drawerFilter}>
                  <Grid
                    gridTemplateColumns="1fr 1fr"
                    gap={15}
                    onChange={handleFilter}
                  >
                    {healthLabels.map((label, index) => {
                      return (
                        <Checkbox
                          value={label}
                          key={label}
                          id={`checkbox-${index}`}
                          defaultChecked={JSON.parse(
                            localStorage.getItem("Filters")
                          )?.includes(label)}
                          isChecked={checkedState[index]}
                          onChange={() => {
                            handleChange(index);
                          }}
                          marginBottom={6}
                        >
                          <span className={styles.checkBox}>{label}</span>
                        </Checkbox>
                      );
                    })}
                  </Grid>
                </DrawerBody>
                <DrawerFooter className={styles.justifyContent}>
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
                    onClick={handleClear}
                  >
                    Reset
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </form>
        </div>
      </div>
      <RecipeContainer
        data={data}
        isLoading={isLoading}
        isError={isError}
        query={query}
      >
        {!!data.hits.length &&
          data.hits.map((recipe) => {
            return <Card recipe={recipe.recipe} key={recipe.recipe.uri} />;
          })}
      </RecipeContainer>
    </div>
  );
}

export default Recipes;
