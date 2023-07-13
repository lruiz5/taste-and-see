import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import { IngredientInput, InstructionInput } from "../../components";
import "./create.css";
import { toast } from "react-toastify";
import { useTitle } from "../../hooks/useTitle";
import { useNavigate } from "react-router-dom";

export const Create = () => {
  const navigate = useNavigate();
  const recipeRef = collection(db, "recipes");
  useTitle("Create");

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCreate = async (event) => {
    event.preventDefault();
    const document = {
      name: event.target.name.value,
      description: event.target.description.value,
      servings: parseInt(event.target.servings.value),
      image_path: event.target.image_path.value,
      ingredients: getIngredients(),
      instructions: getInstructions(),
      prep_time: event.target.prep_time.value,
      cook_time: event.target.cook_time.value,
      notes: event.target.notes.value,
    };
    await addDoc(recipeRef, document)
      .then((response) => {
        console.log(response.id);
        toast.success("Recipe created.");
        event.target.name.value = "";
        event.target.description.value = "";
        event.target.servings.value = "";
        event.target.image_path.value = "";
        event.target.prep_time.value = "";
        event.target.cook_time.value = "";
        event.target.notes.value = "";

        //TODO: clear ingredients / instructions
        navigate(`/recipes/${response.id}`);

        handleScrollToTop();
      })
      .catch((err) => toast.error(`Unable to create recipe: ${err}`));
  };

  const getIngredients = () => {
    let ingredients = [];
    // get HTML Collection List and convert to array
    const ingredientsArray = Array.prototype.slice.call(
      document.getElementsByClassName("ingredient flex-horoz")
    );

    ingredientsArray.forEach((item) => {
      //add to ingredients list
      ingredients.push(item.children.ingredient_name.value);
    });

    return ingredients;
  };

  const getInstructions = () => {
    let instructions = [];
    // get HTML Collection List and convert to array
    const instructionsArray = Array.prototype.slice.call(
      document.getElementsByClassName("instruction flex-horoz")
    );

    instructionsArray.forEach((item) => {
      //add to instructions list
      instructions.push(item.children.instruction_name.value);
    });

    return instructions;
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
          rows="5"
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
        <InstructionInput />

        <input
          type="text"
          className="textinput"
          name="prep_time"
          placeholder="Prep Time (min.)"
          maxLength={"9"}
          required
        />
        <input
          type="text"
          className="textinput"
          name="cook_time"
          placeholder="Cook Time (min.)"
          maxLength={"9"}
          required
        />
        <textarea
          name="notes"
          className="textinput"
          cols="30"
          rows="5"
          placeholder="Notes..."
          maxLength={"500"}
        ></textarea>
        <button type="submit" className="submit">
          Create
        </button>
      </form>
    </section>
  );
};
