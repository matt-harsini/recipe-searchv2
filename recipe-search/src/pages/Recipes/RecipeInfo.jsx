import React, { useEffect, useState } from "react";
import { useLocation, Link, useOutletContext } from "react-router-dom";
import { UnorderedList } from "@chakra-ui/react";
import styles from "./RecipeInfo.module.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
} from "@chakra-ui/react";
import { MdOpenInNew } from "react-icons/md";
import { BsChevronLeft } from "react-icons/bs";
import Card from "../../components/ui/Card";

function RecipeInfo() {
  const location = useLocation();
  const data = location.state;
  const [showInfo, setShowInfo] = useState({
    ingredients: true,
    labels: false,
    nutrition: false,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <Link to="/search-recipes" title="Go back to search">
          <BsChevronLeft className={styles.exit} />
        </Link>
        <Center>
          <motion.h1 className={styles.headerOne}>{data.label}</motion.h1>
        </Center>
        <div className={styles.container}>
          <div className={styles.cardContainer}>
            <Card recipe={data} />
            <Center marginTop={50}>
              <a href={data.url} className={styles.instructions}>
                Instructions
                <MdOpenInNew className={styles.icon} />
              </a>
            </Center>
          </div>
          <div className={styles.accordionContainer}>
            <Tabs
              className={styles.positionRelative}
              isFitted
              id="tag-panels"
              size="sm"
            >
              <TabList>
                <Tab
                  className={styles.header}
                  onClick={() => {
                    setShowInfo({
                      ingredients: true,
                      labels: false,
                      nutrition: false,
                    });
                  }}
                  _selected={{ color: "white", bg: "blue.500" }}
                >
                  Ingredients
                </Tab>
                <Tab
                  className={styles.header}
                  onClick={() => {
                    setShowInfo({
                      ingredients: false,
                      labels: true,
                      nutrition: false,
                    });
                  }}
                  _selected={{ color: "white", bg: "green.500" }}
                >
                  Labels
                </Tab>
                <Tab
                  className={styles.header}
                  onClick={() => {
                    setShowInfo({
                      ingredients: false,
                      labels: false,
                      nutrition: true,
                    });
                  }}
                  _selected={{ color: "white", bg: "red.500" }}
                >
                  Nutrition
                </Tab>
              </TabList>
              <TabPanels className={styles.positionAbsolute}>
                <TabPanel>
                  <UnorderedList className={styles.ingredients} spacing={5}>
                    <AnimatePresence>
                      {showInfo.ingredients &&
                        data.ingredientLines.map((ingredient, i) => {
                          return (
                            <motion.li
                              key={ingredient}
                              variants={{
                                hidden: (i) => ({
                                  y: -5 * i,
                                  opacity: 0,
                                }),
                                visible: (i) => ({
                                  y: 0,
                                  opacity: 1,
                                  transition: {
                                    type: "tween",
                                    bounce: 0,
                                    delay: i * 0.0015,
                                  },
                                }),
                                removed: (i) => ({
                                  opacity: 0,
                                }),
                              }}
                              initial="hidden"
                              animate="visible"
                              exit="removed"
                              custom={i}
                              className={styles.tag}
                            >
                              {ingredient.replace("*", "")}
                            </motion.li>
                          );
                        })}
                    </AnimatePresence>
                  </UnorderedList>
                </TabPanel>
                <TabPanel>
                  <UnorderedList className={styles.healthLabels} spacing={5}>
                    <AnimatePresence>
                      {showInfo.labels &&
                        data.healthLabels.map((ingredient, i) => {
                          return (
                            <motion.li
                              key={ingredient}
                              variants={{
                                hidden: (i) => ({
                                  y: -5 * i,
                                  opacity: 0,
                                }),
                                visible: (i) => ({
                                  y: 0,
                                  opacity: 1,
                                  transition: {
                                    type: "tween",
                                    delay: i * 0.0015,
                                  },
                                }),
                                removed: {
                                  opacity: 0,
                                },
                              }}
                              initial="hidden"
                              animate="visible"
                              exit="removed"
                              custom={i}
                              className={styles.tag}
                            >
                              {ingredient.replace("*", "")}
                            </motion.li>
                          );
                        })}
                    </AnimatePresence>
                  </UnorderedList>
                </TabPanel>
                <TabPanel>
                  <UnorderedList className={styles.nutrition} spacing={5}>
                    <AnimatePresence>
                      {showInfo.nutrition &&
                        Object.values(data.totalNutrients).map(
                          (nutrient, i) => {
                            return (
                              <motion.li
                                key={nutrient.label}
                                variants={{
                                  hidden: (i) => ({
                                    y: -5 * i,
                                    opacity: 0,
                                  }),
                                  visible: (i) => ({
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                      type: "tween",
                                      bounce: 0,
                                      delay: i * 0.0015,
                                    },
                                  }),
                                  removed: (i) => ({
                                    opacity: 0,
                                  }),
                                }}
                                initial="hidden"
                                animate="visible"
                                exit="removed"
                                custom={i}
                                className={styles.tag}
                              >{`${nutrient.label}: ${Math.round(
                                nutrient.quantity
                              )}${nutrient.unit}`}</motion.li>
                            );
                          }
                        )}
                    </AnimatePresence>
                  </UnorderedList>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
      </section>
    </main>
  );
}

export default RecipeInfo;
