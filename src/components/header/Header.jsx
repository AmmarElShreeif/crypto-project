import { useState } from "react";
import { Link } from "react-router";
import { signInWithPopup, signOut } from "firebase/auth";
import { navItems } from "../../data";
import { auth, provider } from "../../lib/firebase";
import Profile from "../../components/profile/Profile";
import "./header.css";

const Header = () => {
  const [user, setUser] = useState(null);
  const [showModal, setshowModal] = useState(false);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser({ username: user.displayName, photoUrl: user.photoURL });
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
            <Profile photo={user.photoUrl} onClick={handleLogout} />
          ) : (
            <a className="log" onClick={handleLogin}>
              <img src="./logos/google.svg" /> Sign In
            </a>
          )}
          <button id="menu" onClick={() => setshowModal(true)}>
            <span className="icon-list2" />
          </button>
        </div>
      </div>
      {showModal && (
        <div className={`nav-fixed ${showModal ? "open" : ""}`}>
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
            {user ? (
              <Profile photo={user.photoUrl} onClick={handleLogout} />
            ) : (
              <a className="log" onClick={handleLogin}>
                <img src="./logos/google.svg" /> Sign In
              </a>
            )}
          </div>
          <button id="close" onClick={() => setshowModal(false)}>
            <span className="icon-cancel" />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
