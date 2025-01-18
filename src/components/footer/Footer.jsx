import { Link } from "react-router";
import { companyItems, navItems, soicalMedia } from "../../data";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-box">
          <div className="footer-section">
            <h1 className="title">
              <i className="ri-btc-line"></i>
              CryptoHub
            </h1>
            <p className="sub-title">
              CryptoHub is your go-to platform for real-time cryptocurrency
              prices, market analysis, and more. Stay updated with the latest
              trends in the crypto world.
            </p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
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
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              {companyItems.map((item, index) => (
                <li key={index}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <ul className="social-icons">
              {soicalMedia.map((item, index) => (
                <li>
                  <a href={item.href} key={index}>
                    <span className={item.icon} /> {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Ammar ElShreif. All Rights Reserved.
        </p>
      </div>
      <a href="#">
        <button className="scroll2Top">
          <i className="ri-arrow-up-s-line"></i>
        </button>
      </a>
    </footer>
  );
};

export default Footer;
