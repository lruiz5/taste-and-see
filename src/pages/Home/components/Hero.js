import { Link } from "react-router-dom";
import "./Hero.css";
export const Hero = () => {
  return (
    <section className="hero-container">
      <div className="mh-5">
        <h1 className="hero-title">Lu's Recipe Book</h1>
        <p className="hero-subtitle">
          bringing my curated recipes to your fingertips - browse my limited
          collection of recipes today!
        </p>
        <Link to="/recipes" type="button" className="cta-btn">
          Explore All Recipes
        </Link>
      </div>
      <div className="hero-img-container">
        <img
          className="hero-img"
          src="https://source.unsplash.com/x5SRhkFajrA/600x300"
          alt="CodeBook Hero Section"
        />
      </div>
    </section>
  );
};
