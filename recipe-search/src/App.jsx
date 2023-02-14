import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/NavBar/Navigation";
import RecipeForm from "./components/Recipe/RecipeForm";
import Home from "./components/Home/Home";
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
