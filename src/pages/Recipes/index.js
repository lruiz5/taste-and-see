import { useEffect, useRef, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import { RecipeCard, SkeletonCard } from "../../components";
import "./Recipes.css";
import { useTitle } from "../../hooks/useTitle";
import { FilterBar } from "../../components";

export const Recipes = () => {
  useTitle("Recipes");
  //const { recipes, initialRecipesList } = useFilter();
  const [showFilter, setShowFilter] = useState(false);
  const [recipes, setRecipes] = useState(new Array(9).fill(false));
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
  }, [recipesRef, toggle]);

  recipes.sort((a, b) => {
    let fa = a.name,
      fb = b.name;

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      <section className="my-5">
        <div className="my-5 d-flex justify-content-between">
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
                className="filter-icon"
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
          {recipes?.map((recipe, index) =>
            recipe ? (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                setToggle={() => setToggle(!toggle)}
              />
            ) : (
              <SkeletonCard key={index} />
            )
          )}
        </div>
        {showFilter && <FilterBar setShowFilter={setShowFilter} />}
      </section>
    </>
  );
};
