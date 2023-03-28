import { RecipeCard } from "../../../components";
import "./Featured.css";
export const Featured = () => {
  return (
    <section className="mh-20">
      <h1 className="featured-title">Meg's Favorites</h1>
      <div className="featured-items-container">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </section>
  );
};
