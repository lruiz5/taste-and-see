import { useTitle } from "../../hooks/useTitle";
import { Featured, Hero } from "./components";

export const Home = () => {
  useTitle("Home");
  return (
    <main>
      <Hero />
      <Featured />
    </main>
  );
};
