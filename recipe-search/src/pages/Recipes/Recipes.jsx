import React, { useEffect, useState, useReducer } from "react";
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

function Recipes() {
  const [query, setQuery] = useState(
    localStorage.getItem("Query") != "" ? localStorage.getItem("Query") : ""
  );
  const [input, setInput] = useState("");
  const { data, setData, isLoading, isError } = useFetchRecipe(query);
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
    console.log(123);
    setQuery(input);
  };
  const handleSort = (e) => {
    const sortByValue = e.target.value;
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
  console.log(data);
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
                  type="submit"
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
                        <Radio size="lg" value="1" onChange={() => {}}>
                          <span className={styles.checkBox}>
                            Calories: High to Low
                          </span>
                        </Radio>
                        <Radio size="lg" value="2" onChange={() => {}}>
                          <span className={styles.checkBox}>
                            Calories: Low to High
                          </span>
                        </Radio>
                        <Radio size="lg" value="3" onChange={() => {}}>
                          <span className={styles.checkBox}>
                            Protein: High to Low
                          </span>
                        </Radio>
                        <Radio size="lg" value="4" onChange={() => {}}>
                          <span className={styles.checkBox}>
                            Protein: Low to High
                          </span>
                        </Radio>
                      </Stack>
                      <Stack spacing={10}>
                        <Radio size="lg" value="5" onChange={() => {}}>
                          <span className={styles.checkBox}>
                            Fat: High to Low
                          </span>
                        </Radio>
                        <Radio size="lg" value="6" onChange={() => {}}>
                          <span className={styles.checkBox}>
                            Fat: Low to High
                          </span>
                        </Radio>
                        <Radio size="lg" value="7" onChange={() => {}}>
                          <span className={styles.checkBox}>
                            Carbs: High to Low
                          </span>
                        </Radio>
                        <Radio size="lg" value="8" onChange={() => {}}>
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
                    onChange={() => {
                      console.log(123);
                    }}
                  >
                    <Stack spacing={10}>
                      <Checkbox>
                        <span className={styles.checkBox}>Vegetarian</span>
                      </Checkbox>
                      <Checkbox>
                        <span className={styles.checkBox}>
                          Alcohol-Cocktail
                        </span>
                      </Checkbox>
                      <Checkbox>
                        <span className={styles.checkBox}>Alcohol-Free</span>
                      </Checkbox>
                      <Checkbox>
                        <span className={styles.checkBox}>Celery-Free</span>
                      </Checkbox>
                      <Checkbox>
                        <span className={styles.checkBox}>Crustcean-Free</span>
                      </Checkbox>
                      <Checkbox>
                        <span className={styles.checkBox}>Dairy-Free</span>
                      </Checkbox>
                      <Checkbox>
                        <span className={styles.checkBox}>DASH</span>
                      </Checkbox>
                      <Checkbox>
                        <span className={styles.checkBox}>Egg-Free</span>
                      </Checkbox>
                      <Checkbox>
                        <span className={styles.checkBox}>Fish-Free</span>
                      </Checkbox>
                      <Checkbox>
                        <span className={styles.checkBox}>FODMAP-Free</span>
                      </Checkbox>
                      <Checkbox>
                        <span className={styles.checkBox}>Gluten-Free</span>
                      </Checkbox>
                      <Checkbox>
                        <span className={styles.checkBox}>
                          Immuno-Supportive
                        </span>
                      </Checkbox>
                      <Checkbox>
                        <span className={styles.checkBox}>Keto-Friendly</span>
                      </Checkbox>
                      <Checkbox>
                        <span className={styles.checkBox}>Kosher</span>
                      </Checkbox>
                      <Checkbox>
                        <span className={styles.checkBox}>Low Potassium</span>
                      </Checkbox>
                      <Checkbox>
                        <span className={styles.checkBox}>Low Sugar</span>
                      </Checkbox>
                      <Checkbox>
                        <span className={styles.checkBox}>Wheat-Free</span>
                      </Checkbox>
                    </Stack>
                    <Stack spacing={10}>
                      <Checkbox>
                        <span className={styles.checkBox}>Vegan</span>
                      </Checkbox>
                      <Checkbox>
                        <span className={styles.checkBox}>Lupine-Free</span>
                      </Checkbox>
                      <Checkbox>
                        <span className={styles.checkBox}>Mediterranean</span>
                      </Checkbox>
                      <Checkbox>
                        <span className={styles.checkBox}>Mollusk-Free</span>
                      </Checkbox>
                      <Checkbox>
                        <span className={styles.checkBox}>No oil added</span>
                      </Checkbox>
                      <Checkbox>
                        <span className={styles.checkBox}>Paleo</span>
                      </Checkbox>
                      <Checkbox>
                        <span className={styles.checkBox}>Peanut-Free</span>
                      </Checkbox>
                      <Checkbox>
                        <span className={styles.checkBox}>Pescatarian</span>
                      </Checkbox>
                      <Checkbox>
                        <span className={styles.checkBox}>Pork-Free</span>
                      </Checkbox>
                      <Checkbox>
                        <span className={styles.checkBox}>Red-Meat-Free</span>
                      </Checkbox>
                      <Checkbox>
                        <span className={styles.checkBox}>Sesame-Free</span>
                      </Checkbox>
                      <Checkbox>
                        <span className={styles.checkBox}>Shellfish-Free</span>
                      </Checkbox>
                      <Checkbox>
                        <span className={styles.checkBox}>Soy-Free</span>
                      </Checkbox>
                      <Checkbox>
                        <span className={styles.checkBox}>Sugar-Conscious</span>
                      </Checkbox>
                      <Checkbox>
                        <span className={styles.checkBox}>Sulfite-Free</span>
                      </Checkbox>
                      <Checkbox>
                        <span className={styles.checkBox}>Tree-Nut-Free</span>
                      </Checkbox>
                    </Stack>
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
