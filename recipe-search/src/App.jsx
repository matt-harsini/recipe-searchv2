import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarOutlet from "./components/Navbar/NavbarOutlet";
import { MotionConfig } from "framer-motion";
import Loading from "./components/loading/Loading";

const Home = lazy(() => import("./pages/Home/Home"));
const Recipes = lazy(() => import("./pages/Recipes/Recipes"));
const RecipeInfo = lazy(() => import("./pages/Recipes/RecipeInfo"));

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarOutlet />}>
            <Route index element={<Home />} />
            <Route path="/search-recipes" element={<Recipes />} />
            <Route path="/search-recipes/:recipeID" element={<RecipeInfo />} />
            <Route path="/loading" element={<Loading />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  );
}

export default App;
