import { IngredientInput } from "../components";
import "./Create.css";

export const Create = () => {
  return (
    <section className="create">
      <div className="heading">
        <h1>Add New Recipe</h1>
      </div>
      <form className="createRecipe">
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
        <IngredientInput />
        <button type="submit" className="submit">
          Create
        </button>
      </form>
    </section>
  );
};
