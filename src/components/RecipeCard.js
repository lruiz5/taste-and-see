import { Link } from "react-router-dom";
import RecipeImage from "../assets/images/chicken-man.jpg";
import "./RecipeCard.css";

export const RecipeCard = (props) => {
  const { recipe } = props;
  const poster =
    `https://source.unsplash.com/${recipe.image_path}/600x300` || RecipeImage;
  return (
    <div className="card">
      <div className="card_image">
        <Link to={`/recipes/${recipe.id}`}>
          <span className="note">Meg's Fav!</span>
          <img src={poster} alt="recipe poster" />
          <span className="card_price">
            <span>$</span>9
          </span>
        </Link>
      </div>

      <div className="card_content">
        <Link to={`/recipes/${recipe.id}`}>
          <h2 className="card_title">{recipe.name}</h2>
        </Link>
        <div className="card_text">
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
