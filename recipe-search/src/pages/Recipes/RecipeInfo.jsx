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
} from "@chakra-ui/react";
function RecipeInfo() {
  const [isOpen, setIsOpen] = useState(true);
  const { recipeID } = useParams();
  console.log(recipeID);
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
  return (
    <main className={styles.main}>
      <div>
        <section className={styles.sectionLinks}>
          <Box className={styles.btnContainer}>
            <Link to="/search-recipes" className={styles.links}>
              <span className={styles.btnText}>Back to search</span>
            </Link>
            <a href={data.url} className={styles.links}>
              <span className={styles.btnText}>Instructions</span>
            </a>
          </Box>
        </section>
        <section className={styles.section}>
          <div className={styles.ingredients}>
            <Accordion
              allowToggle
              className={styles.accordion}
              defaultIndex={[0]}
            >
              <AccordionItem>
                <h2>
                  <AccordionButton
                    _expanded={{ bg: "#212529", color: "white" }}
                    onClick={() => {
                      setIsOpen((prevState) => !prevState);
                    }}
                  >
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className={styles.ingredients}
                    >
                      Ingredients
                    </Box>
                    <AccordionIcon className={styles.accordionIcon} />
                  </AccordionButton>
                </h2>

                <AccordionPanel pb={4} className={styles.accordionPanel}>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div>
                        <UnorderedList
                          className={styles.ingredients}
                          spacing={5}
                        >
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
                      </motion.div>
                    )}
                  </AnimatePresence>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className={styles.imgContainer}>
            <img
              src={data.images.THUMBNAIL.url}
              alt={data.label}
              width={data.images.THUMBNAIL.width}
              height={data.images.THUMBNAIL.height}
              className={styles.img}
            />
          </div>
          <Accordion
            allowToggle
            className={styles.accordion}
            defaultIndex={[0]}
          >
            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ bg: "#212529", color: "white" }}
                  onClick={() => {
                    setIsOpen((prevState) => !prevState);
                  }}
                >
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className={styles.ingredients}
                  >
                    Ingredients
                  </Box>
                  <AccordionIcon className={styles.accordionIcon} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.accordionPanel}>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div>
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
                    </motion.div>
                  )}
                </AnimatePresence>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
      <section className={styles.nutritionalInfo}></section>
    </main>
  );
}

export default RecipeInfo;
