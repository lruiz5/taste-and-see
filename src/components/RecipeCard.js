import { Link } from "react-router-dom";
import RecipeImage from "../assets/images/chicken-man.jpg";
import "./RecipeCard.css";

const recipe = {
  id: "LNn6O_Mt730",
  title: "Roast Beef",
  description:
    "Roast beef is a delicious dish made by slow-cooking a piece of beef in the oven until it becomes tender and juicy. The beef is typically seasoned with herbs and spices, and the outside is seared to create a crispy crust. The result is a mouth-watering and flavorful meat that is often served as a main course or in sandwiches.",
  servings: 6,
};

export const RecipeCard = () => {
  const poster =
    `https://source.unsplash.com/${recipe.id}/600x300` || RecipeImage;
  return (
    <div class="card">
      <div class="card_image">
        <Link to={`/recipes/${recipe.id}`}>
          <span class="note">Meg's Fav!</span>
          <img src={poster} alt="recipe poster" />
          <span class="card_price">
            <span>$</span>9
          </span>
        </Link>
      </div>

      <div class="card_content">
        <Link to={`/recipes/${recipe.id}`}>
          <h2 class="card_title">{recipe.title}</h2>
        </Link>
        <div class="card_text">
          <p>{recipe.description}</p>
          <hr />
          {/* <p>
            Served with your choice of dressing on the side:{" "}
            <strong>housemade ranch</strong>,{" "}
            <strong>cherry balsamic vinaigrette</strong>,{" "}
            <strong>creamy chipotle</strong>,{" "}
            <strong>avocado green goddess</strong>, or{" "}
            <strong>honey mustard</strong>. Add your choice of protein for $2
            more.
          </p> */}
        </div>
      </div>
    </div>
  );
};
