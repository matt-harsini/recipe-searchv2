import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarOutlet from "./components/Navbar/NavbarOutlet";

const Home = lazy(() => import("./pages/Home/Home"));
const Recipes = lazy(() => import("./pages/Recipes/Recipes"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarOutlet />}>
          <Route index element={<Home />} />
          <Route path="/search-recipes" element={<Recipes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
