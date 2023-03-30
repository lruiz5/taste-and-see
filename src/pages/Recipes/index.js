import { useEffect, useRef, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import { RecipeCard } from "../../components";
import "./recipes.css";

/* import { FilterBar } from "./components/FilterBar"; */

export const Recipes = () => {
  //const { recipes, initialRecipesList } = useFilter();
  const [showFilter, setShowFilter] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [toggle, setToggle] = useState([]);

  const recipesRef = useRef(collection(db, "recipes"));

  useEffect(() => {
    async function getRecipes() {
      const data = await getDocs(recipesRef.current);

      setRecipes(
        data.docs.map((document) => ({ ...document.data(), id: document.id }))
      );
    }
    getRecipes();
  }, [recipesRef]);

  return (
    <main>
      <section className="mh-5">
        <div className="mh-5 flex justify-between">
          <span className="page-header">All Recipes ({recipes.length})</span>
          <span>
            <button
              id="dropdownMenuIconButton"
              onClick={() => setShowFilter(!showFilter)}
              data-dropdown-toggle="dropdownDots"
              className="filter-button"
              type="button"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>
          </span>
        </div>

        <div className="recipes-container">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              toggle={toggle}
              setToggle={setToggle}
            />
          ))}
        </div>
      </section>
      {/* {showFilter && <FilterBar setShowFilter={setShowFilter} />} */}
    </main>
  );
};