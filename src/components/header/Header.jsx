import { useState } from "react";
import { navItems } from "../../data";
import { Link } from "react-router";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../../lib/firebase";
import "./header.css";

const Header = () => {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1 className="title">CryptoHub</h1>
        </div>
        <div className="nav-bar">
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <Link to={item.href} className="nav-link">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="header-buttons">
          {user ? (
            <button onClick={handleLogout}>Sign Out</button>
          ) : (
            <a className="log" onClick={handleLogin}>
              <img src="./logos/google.svg" /> Sign In
            </a>
          )}
          <button id="theme">
            <i className="ri-sun-fill"></i>
          </button>
          <button id="menu">
            <i className="ri-menu-line"></i>
          </button>
        </div>
      </div>
      <div className="nav-fixed">
        <ul>
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <Link to={item.href} className="nav-link">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="header-buttons">
          <a href="#" id="btn">
            Log In
          </a>
          <button id="theme">
            <i className="ri-sun-fill"></i>
          </button>
        </div>
        <button id="close">
          <i className="ri-close-large-line"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
