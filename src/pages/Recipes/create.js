import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import { IngredientInput } from "../../components";
import "./create.css";
import { toast } from "react-toastify";
import { useTitle } from "../../hooks/useTitle";

export const Create = () => {
  const recipeRef = collection(db, "recipes");
  useTitle("Create");

  const handleCreate = async (event) => {
    event.preventDefault();
    const document = {
      name: event.target.name.value,
      description: event.target.description.value,
      servings: parseInt(event.target.servings.value),
      image_path: event.target.image_path.value,
      ingredients: getIngredients(),
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

  const getIngredients = () => {
    let ingredients = [];
    // get HTML Collection List and convert to array
    const ingredientsArray = Array.prototype.slice.call(
      document.getElementsByClassName("ingredient flex-horoz")
    );

    ingredientsArray.forEach((item, index) => {
      //create an object with all ingredient attributes
      let currentIngredient = {
        name: item.children.ingredient_name.value,
        amount: item.children.ingredient_amt.value,
        unit: item.children.ingredient_unit.value,
      };

      //add to full ingredients map
      ingredients.push(currentIngredient);
    });
    console.log(ingredients);
    return ingredients;
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
        <IngredientInput />
        <button type="submit" className="submit">
          Create
        </button>
      </form>
    </section>
  );
};
