import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import { RecipeCard } from "../../components";
import "./Recipes.css";

/* import { FilterBar } from "./components/FilterBar"; */

/* import { toast } from "react-toastify"; */

export const Recipes = () => {
  //const { products, initialProductList } = useFilter();
  const [showFilter, setShowFilter] = useState(false);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const recipesRef = collection(db, "recipes");
    async function getRecipes() {
      const data = await getDocs(recipesRef);

      setRecipes(
        data.docs.map((document) => ({ ...document.data(), id: document.id }))
      );
    }
    /* getRecipes(); */
  }, []);

  return (
    <main>
      <section className="mh-5">
        <div className="mh-5 flex justify-between">
          <span className="page-header">All Recipes (0)</span>
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
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
      {/* {showFilter && <FilterBar setShowFilter={setShowFilter} />} */}
    </main>
  );
};
