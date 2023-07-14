import { useTitle } from "../../hooks/useTitle";
import { Featured, Hero } from "./components";

export const Home = () => {
  useTitle("Home");
  return (
    <>
      <Hero />
      <Featured />
    </>
  );
};
