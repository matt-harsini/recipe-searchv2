import React, { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import { useOutletContext } from "react-router-dom";
function Home() {
  const ref = useOutletContext();
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      ref[1].current.style.background = "#212529";
    };
  }, []);
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default Home;
