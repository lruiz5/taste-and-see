import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import "./NotFound.css";

export const NotFound = () => {
  const navigate = useNavigate();

  useTitle("404: Oops!");

  return (
    <>
      <h1 className="not-found-header">Yikes!</h1>
      <h2 className="not-found-subheader">
        I'm thinking this isn't where you wanted to be.
      </h2>

      <div className="buttons">
        <Link className="not-found-link" onClick={() => navigate(-1)}>
          Go Back
        </Link>
        <Link className="not-found-link" to="/">
          Go Home
        </Link>
      </div>
    </>
  );
};
