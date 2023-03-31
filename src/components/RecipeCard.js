import { Link, useNavigate } from "react-router-dom";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { toast } from "react-toastify";
import RecipeImage from "../assets/images/chicken-man.jpg";
import "./RecipeCard.css";

export const RecipeCard = (props) => {
  const { recipe, setToggle } = props;
  const navigate = useNavigate();
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));
  const poster =
    `https://source.unsplash.com/${recipe.image_path}/600x300` || RecipeImage;
  const handleDelete = async () => {
    const recipeDoc = doc(db, "recipes", recipe.id);
    await deleteDoc(recipeDoc);
    setToggle();
    toast.success("Sucessfully deleted recipe.");
  };
  return (
    <div className="card">
      <div className="card_image">
        <Link to={`/recipes/${recipe.id}`}>
          {recipe.tags?.map((tag) => {
            return tag === "meg's pick" ? (
              <span key={tag} className="note text-uppercase">
                {tag}
              </span>
            ) : (
              ""
            );
          })}
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
        {isAuth && (
          <div className="icon-container">
            <span
              onClick={() => navigate(`/recipes/${recipe.id}/edit`)}
              className="crud-icon edit"
            >
              <i className="bi bi-pencil-fill"></i>
            </span>
            <span onClick={handleDelete} className="crud-icon trash">
              <i className="bi bi-trash-fill"></i>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
