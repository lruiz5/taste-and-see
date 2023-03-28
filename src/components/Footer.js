import { Link } from "react-router-dom";
import "./styles/Footer.css";
export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      {" "}
      <p>
        © {year} <Link to="/">Taste and See</Link>. All Rights Reserved.
      </p>
    </footer>
  );
};
