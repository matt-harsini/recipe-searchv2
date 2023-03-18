import React, { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { UnorderedList } from "@chakra-ui/react";
import styles from "./RecipeInfo.module.css";
import { useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";
import { useAnimateOnView } from "../../hooks/useAnimateOnView";
import { MdOpenInNew } from "react-icons/md";
import { Button } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
function RecipeInfo() {
  const [isOpen, setIsOpen] = useState(false);
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
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.ingredients}>
          <Accordion allowToggle className={styles.accordion}>
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
                {isOpen && (
                  <UnorderedList className={styles.ingredients} spacing={5}>
                    {data.ingredientLines.map((ingredient, i) => {
                      console.log(ingredient);
                      return (
                        <motion.li
                          key={ingredient}
                          variants={{
                            hidden: (i) => ({
                              y: 25 * i,
                              opacity: 0,
                            }),
                            visible: (i) => ({
                              y: 0,
                              opacity: 1,
                              transition: {
                                type: "spring",
                                bounce: 0.1,
                                delay: i * 0.025,
                              },
                            }),
                          }}
                          initial="hidden"
                          animate="visible"
                          custom={i}
                          className={styles.liItem}
                        >
                          {ingredient.replace("*", "")}
                        </motion.li>
                      );
                    })}
                  </UnorderedList>
                )}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div className={styles.imgContainer}>
          <img
            src={data.images.SMALL.url}
            alt={data.label}
            width={data.images.SMALL.width}
            height={data.images.SMALL.height}
            className={styles.img}
          />
          <div className={styles.btnContainer}>
            <Button
              bg="#212529"
              color="white"
              _hover={{
                background: "#111827",
              }}
              _active={{
                background: "#f03e3e",
              }}
              className={styles.btn}
            >
              <Link to="/search-recipes" className={styles.links}>
                <span className={styles.btnText}>Back to search</span>
              </Link>
            </Button>
            <Button
              size="lg"
              bg="#212529"
              color="white"
              _hover={{
                background: "#111827",
              }}
              _active={{
                background: "#f03e3e",
              }}
              className={styles.btn}
              rightIcon={<MdOpenInNew className={styles.openIcon} />}
            >
              <a href={data.url} className={styles.links}>
                <span className={styles.btnText}>Instructions</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
      <section className={styles.nutritionalInfo}>
        
      </section>
    </main>
  );
}

export default RecipeInfo;
