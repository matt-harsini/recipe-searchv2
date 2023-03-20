import React, { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { UnorderedList } from "@chakra-ui/react";
import styles from "./RecipeInfo.module.css";
import { useOutletContext } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
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
            <Accordion>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <motion.h2
                        className={styles.header}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        Ingredients
                      </motion.h2>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
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
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <motion.h2
                        className={styles.header}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        Health Labels
                      </motion.h2>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <UnorderedList className={styles.ingredients} spacing={5}>
                    {data.healthLabels.map((ingredient, i) => {
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
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  );
}

export default RecipeInfo;
