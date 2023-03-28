import { Route, Routes } from "react-router-dom";
import { Home, Create, NotFound, Recipes, RecipeDetails } from "../pages";

export const AllRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/create" element={<Create />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </main>
  );
};
