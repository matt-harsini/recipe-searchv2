import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarOutlet from "./components/Navbar/NavbarOutlet";
import { MotionConfig } from "framer-motion";
const Home = lazy(() => import("./pages/Home/Home"));
const Recipes = lazy(() => import("./pages/Recipes/Recipes"));

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarOutlet />}>
            <Route index element={<Home />} />
            <Route path="/search-recipes" element={<Recipes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  );
}

export default App;
