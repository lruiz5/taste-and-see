import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { IngredientInput } from "../components";
import "./Create.css";
import { toast } from "react-toastify";

export const Create = () => {
  const recipeRef = collection(db, "recipes");

  const handleCreate = async (event) => {
    event.preventDefault();
    const document = {
      name: event.target.name.value,
      description: event.target.description.value,
      servings: parseInt(event.target.servings.value),
      image_path: event.target.image_path.value,
    };
    await addDoc(recipeRef, document)
      .then(() => {
        toast.success("Recipe created.");
        event.target.name.value = "";
        event.target.description.value = "";
        event.target.servings.value = "";
        event.target.image_path.value = "";
      })
      .catch((err) => toast.error(`Unable to create recipe: ${err}`));
  };
  return (
    <section className="create">
      <div className="heading">
        <h1>Add New Recipe</h1>
      </div>
      <form className="createRecipe" onSubmit={handleCreate}>
        <input
          type="text"
          className="textinput"
          name="name"
          placeholder="Recipe Name"
          maxLength={"50"}
          required
        />
        <textarea
          name="description"
          className="description"
          cols="30"
          rows="10"
          placeholder="Description"
          maxLength={"500"}
          required
        ></textarea>
        <input
          type="text"
          className="textinput"
          name="servings"
          placeholder="Servings"
          maxLength={"3"}
          required
        />
        <input
          type="text"
          className="textinput"
          name="image_path"
          placeholder="Image Path"
          maxLength={"32"}
          required
        />
        <button type="submit" className="submit">
          Create
        </button>
      </form>
    </section>
  );
};
