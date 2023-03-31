import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { RecipeCard } from "../../../components";
import "./Featured.css";
import { useEffect, useRef, useState } from "react";
export const Featured = () => {
  const [recipes, setRecipes] = useState([]);

  const recipesRef = useRef(collection(db, "recipes"));

  useEffect(() => {
    async function getRecipes() {
      const data = await getDocs(recipesRef.current);

      const featured = data.docs.filter((document) =>
        document.data().tags?.includes("meg's pick")
      );

      setRecipes(
        featured.map((document) => ({
          ...document.data(),
          id: document.id,
        }))
      );
    }
    getRecipes();
  }, [recipesRef]);
  return (
    <section className="mh-20">
      <h1 className="featured-title">Meg's Favorites</h1>
      <div className="featured-items-container">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};
