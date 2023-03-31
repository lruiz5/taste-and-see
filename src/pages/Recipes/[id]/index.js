import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { useTitle } from "../../../hooks/useTitle";
import { toast } from "react-toastify";

export const RecipeDetails = () => {
  const params = useParams();
  const recipeRef = useRef(doc(db, "recipes", params.id));
  const [recipe, setRecipe] = useState({});
  const poster = `https://source.unsplash.com/${recipe.image_path}/600x300`;
  useTitle("Recipe Details");

  useEffect(() => {
    async function getRecipe() {
      const response = await getDoc(recipeRef.current)
        .then((data) => setRecipe({ ...data.data(), id: data.id }))
        .catch((err) => toast.error(`error: ${err}`));

      !response.ok && toast.error(response.ok);
    }
    getRecipe();
  }, [params.id, recipeRef]);
  return (
    <main>
      <section className="shadow p-3 mb-5 bg-body-tertiary rounded">
        <div>
          <img
            style={{ height: "100%", width: "100%" }}
            src={poster}
            alt="Recipe View"
          />
        </div>
        <div className="p-4">
          <div className="d-flex justify-content-between mb-3 border-bottom">
            <div className="w-75">
              <div>
                {recipe.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className={`badge text-bg-light text-uppercase p-2 ${
                      index < recipe.tags.length - 1 ? "me-2" : ""
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1>{recipe.name}</h1>
              <h3 className="lead ">{recipe.description}</h3>
            </div>
            <div className="m-auto">
              <p>Prep Time: {recipe.prep_time || "0 min"}</p>
              <p>Cook Time: {recipe.cook_time || "0 min"}</p>
              <p className="fw-bold">
                Total Time: {recipe.total_time || "0 min"}
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between mb-3 ">
            <div className="w-75">
              <h2 className="lead">Ingredients</h2>
              <ul className="w-50">
                {recipe.ingredients?.map((ingredient) => (
                  <li key={ingredient} className="list-group-item">
                    <input
                      className="form-check-input me-1"
                      type="checkbox"
                      value=""
                      id={`${ingredient}-CheckboxStretched`}
                    />
                    <label
                      className={`form-check-label stretched-link ${
                        ingredient.includes("(optional)") ? "fst-italic" : ""
                      }`}
                      htmlFor={`${ingredient}-CheckboxStretched`}
                    >
                      {ingredient}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mx-auto">
              <p>Servings: {recipe.servings}</p>
            </div>
          </div>

          <div className="d-flex justify-content-between mb-3 border-bottom">
            <div className="w-75">
              <h2 className="lead">Instructions</h2>
              <div>
                <ol>
                  {recipe.instructions?.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="fst-italic rounded bg-light p-3">
          <p className="lead font-bold">Notes:</p>
          <div>
            {recipe.notes?.map((note, index) => (
              <p key={index}>{note}</p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
