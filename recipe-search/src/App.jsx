import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/NavBar/Navigation";

const Home = lazy(() => import("./components/Home/Home"));
const RecipeForm = lazy(() => import("./components/Recipe/RecipeForm"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/search-recipes" element={<RecipeForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
