import { Link, NavLink } from "react-router-dom";
import { auth, provider } from "../firebase/config";
import { signInWithPopup, signOut } from "firebase/auth";
import Logo from "../assets/logo.png";
import "./styles/Header.css";
import { useState } from "react";
export const Header = () => {
  const [isAuth, setIsAuth] = useState(false);

  const handleLogin = () => {
    signInWithPopup(auth, provider).then((result) => {
      /* console.log(result); */
      setIsAuth(true);
    });
  };

  const handleLogout = () => {
    setIsAuth(false);
    signOut(auth);
  };
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Logo" />
        <span>Taste and See</span>
      </Link>
      <nav className="nav">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        {isAuth ? (
          <>
            <NavLink to="/create" className="link">
              Create
            </NavLink>
            <button onClick={handleLogout} className="auth">
              <i className="bi bi-box-arrow-right"></i> Logout
            </button>{" "}
          </>
        ) : (
          <button onClick={handleLogin} className="auth">
            <i className="bi bi-google"></i> Login
          </button>
        )}
      </nav>
    </header>
  );
};
