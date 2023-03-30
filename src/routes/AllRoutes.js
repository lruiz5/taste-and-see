import { Route, Routes } from "react-router-dom";
import {
  Home,
  Create,
  NotFound,
  Recipes,
  RecipeDetails,
  RecipeEditor,
} from "../pages";

import { ProtectedRoutes } from "./ProtectedRoutes";

export const AllRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route
          path="/create"
          element={
            <ProtectedRoutes>
              <Create />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/recipes/:id/edit"
          element={
            <ProtectedRoutes>
              <RecipeEditor />
            </ProtectedRoutes>
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </main>
  );
};
