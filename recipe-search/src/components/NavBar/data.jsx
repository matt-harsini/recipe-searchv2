import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import styles from "./NavBar.module.scss";

export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
  },
  {
    id: 2,
    url: "/search-recipes",
    text: "Recipes",
  },
];

export const socials = [
  {
    id: 1,
    url: "https://github.com/mk975025",
    icon: <BsGithub style={{ width: "19.5px", height: "19.5px" }} />,
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/matthew-kim-667392206/",
    icon: <BsLinkedin style={{ width: "19.5px", height: "19.5px" }} />,
  },
];
