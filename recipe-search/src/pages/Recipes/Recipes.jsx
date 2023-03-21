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
  Stack,
  Checkbox,
  RadioGroup,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { motion } from "framer-motion";
import { healthLabels, categories } from "../../data/health_labels";

const filter = new Set();

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
    new Array({ length: healthLabels.length }).fill(false)
  );
  useEffect(() => {
    window.scrollTo(0, 0);
    ref[1].current.style.background = "#212529";
    return () => {
      ref[1].current.style.background = "";
    };
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(input);
  };
  const handleChange = (position) => {
    const updatedCheckedState = checkedState.map((checkbox, index) => {
      return index === position ? !checkbox : checkbox;
    });
    setCheckedState(updatedCheckedState);
  };
  const handleClear = (e) => {
    localStorage.setItem("Filters", JSON.stringify([]));
    setCheckedState(new Array(healthLabels.length).fill(false));
    setData({
      _links: {},
      hits: originalData.hits,
    });
    filter.clear();
  };
  const handleSort = (e) => {
    const sortByValue = e.target.value;
    localStorage.setItem("Sort", JSON.stringify(sortByValue));
    switch (sortByValue) {
      case "1":
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
      case "2":
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
      case "3":
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
      case "4":
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
      case "5":
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
      case "6":
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
      case "7":
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
      case "8":
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
            recipe.healthLabels.includes(label)
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
          recipe.healthLabels.includes(label)
        );
      }),
    });
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
                  <RadioGroup>
                    <Grid
                      gridTemplateColumns="1fr 1fr"
                      gap={15}
                      alignItems="center"
                      onChange={handleSort}
                    >
                      <Stack spacing={10}>
                        <Radio size="lg" value="1">
                          <span className={styles.checkBox}>
                            Calories: High to Low
                          </span>
                        </Radio>
                        <Radio size="lg" value="2">
                          <span className={styles.checkBox}>
                            Calories: Low to High
                          </span>
                        </Radio>
                        <Radio size="lg" value="3">
                          <span className={styles.checkBox}>
                            Protein: High to Low
                          </span>
                        </Radio>
                        <Radio size="lg" value="4">
                          <span className={styles.checkBox}>
                            Protein: Low to High
                          </span>
                        </Radio>
                      </Stack>
                      <Stack spacing={10}>
                        <Radio size="lg" value="5">
                          <span className={styles.checkBox}>
                            Fat: High to Low
                          </span>
                        </Radio>
                        <Radio size="lg" value="6">
                          <span className={styles.checkBox}>
                            Fat: Low to High
                          </span>
                        </Radio>
                        <Radio size="lg" value="7">
                          <span className={styles.checkBox}>
                            Carbs: High to Low
                          </span>
                        </Radio>
                        <Radio size="lg" value="8">
                          <span className={styles.checkBox}>
                            Carbs: Low to High
                          </span>
                        </Radio>
                      </Stack>
                    </Grid>
                  </RadioGroup>
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
                          ).includes(label)}
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
