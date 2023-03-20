import React, { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { UnorderedList } from "@chakra-ui/react";
import styles from "./RecipeInfo.module.css";
import { useOutletContext } from "react-router-dom";
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
  console.log(data.url);
  return (
    <main className={styles.main}>
      <Link to="/search-recipes">
        <BsChevronLeft className={styles.exit} />
      </Link>
      <section className={styles.section}>
        <Center>
          <motion.h1
            className={styles.headerOne}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {data.label}
          </motion.h1>
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
            <Tabs>
              <TabList>
                <Tab>Ingredients</Tab>
                <Tab>Health Labels</Tab>
                <Tab>Three</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <UnorderedList className={styles.ingredients} spacing={5}>
                    {data.ingredientLines.map((ingredient, i) => {
                      console.log(ingredient);
                      return (
                        <motion.li
                          key={ingredient}
                          variants={{
                            hidden: (i) => ({
                              y: 5 * i,
                              opacity: 0,
                            }),
                            visible: (i) => ({
                              y: 0,
                              opacity: 1,
                              transition: {
                                type: "spring",
                                bounce: 0,
                                delay: i * 0.015,
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
                          className={styles.liItem}
                        >
                          {ingredient.replace("*", "")}
                        </motion.li>
                      );
                    })}
                  </UnorderedList>
                </TabPanel>
                <TabPanel>
                  <div className={styles.healthLabels}>
                    {data.healthLabels.map((ingredient, i) => {
                      console.log(ingredient);
                      return (
                        <motion.span
                          key={ingredient}
                          variants={{
                            hidden: (i) => ({
                              y: 5 * i,
                              opacity: 0,
                            }),
                            visible: (i) => ({
                              y: 0,
                              opacity: 1,
                              transition: {
                                type: "spring",
                                bounce: 0,
                                delay: i * 0.015,
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
                          className={styles.liLabel}
                        >
                          {ingredient.replace("*", "")}
                        </motion.span>
                      );
                    })}
                  </div>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
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
