import { Route, Routes } from "react-router-dom";
import { Home, Create, NotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </main>
  );
};
