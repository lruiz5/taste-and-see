import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import "../create.css";
import { toast } from "react-toastify";

export const RecipeEditor = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({});
  const recipeRef = doc(db, "recipes", params.id);
  const handleEdit = (event) => {
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
  };
  const handleUpdate = async (event) => {
    event.preventDefault();

    const updatedDoc = {
      name: event.target.name.value,
      description: event.target.description.value,
      servings: parseInt(event.target.servings.value),
      image_path: event.target.image_path.value,
      updatedAt: serverTimestamp(),
    };

    await updateDoc(recipeRef, updatedDoc)
      .then(() => {
        toast.success("Recipe Updated.");
        setTimeout(() => navigate("/recipes"), 300);
      })
      .catch((err) => toast.error(`Unable to update recipe: ${err}`));
  };

  useEffect(() => {
    async function fetchRecipe() {
      const docRef = doc(db, "recipes", params.id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setRecipe(docSnap.data());
      } else {
        toast.error("No such document!");
      }
    }

    fetchRecipe();
  }, [params.id]);

  return (
    <section className="create">
      <div className="heading">
        <h1>Edit Recipe</h1>
      </div>
      <form className="createRecipe" onSubmit={handleUpdate}>
        <input
          type="text"
          className="textinput"
          name="name"
          placeholder="Recipe Name"
          maxLength={"50"}
          value={recipe.name || ""}
          onChange={handleEdit}
          required
        />
        <textarea
          name="description"
          className="description"
          cols="30"
          rows="10"
          placeholder="Description"
          maxLength={"500"}
          value={recipe.description || ""}
          onChange={handleEdit}
          required
        ></textarea>
        <input
          type="text"
          className="textinput"
          name="servings"
          placeholder="Servings"
          maxLength={"3"}
          value={recipe.servings || ""}
          onChange={handleEdit}
          required
        />
        <input
          type="text"
          className="textinput"
          name="image_path"
          placeholder="Image Path"
          maxLength={"32"}
          value={recipe.image_path || ""}
          onChange={handleEdit}
          required
        />

        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </section>
  );
};
