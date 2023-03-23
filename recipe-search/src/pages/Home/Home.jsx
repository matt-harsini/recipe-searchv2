import React, { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default Home;
