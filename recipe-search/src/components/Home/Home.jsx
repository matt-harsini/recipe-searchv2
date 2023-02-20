import React from "react";
import Header from "./Header";
import Main from "./Main";
import { useOutletContext } from "react-router-dom";
function Home() {
  const ref = useOutletContext();
  return (
    <>
      <Header />
      <Main innerRef={ref} />
    </>
  );
}

export default Home;
