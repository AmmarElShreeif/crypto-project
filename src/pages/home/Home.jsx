import Lottie from "lottie-react";
import cryptoAnimation from "../../animation/crypto.json";
import { testimonialItems } from "../../data";
import "./home.css";

const Home = () => {
  return (
    <div className="Home-section">
      <section className="home" id="home">
        <div className="container">
          <div className="home-content">
            <h1 className="title">
              Stay Ahead in the Crypto Game with CryptoHub
            </h1>
            <p className="sub-title">
              At CryptoHub, we provide real-time cryptocurrency prices,
              comprehensive market analysis, and the tools you need to navigate
              the fast-paced world of digital finance with confidence.
            </p>
            <a id="Msg" className="cta-button">
              Get Started
            </a>
          </div>
          <div className="home-image">
            <Lottie
              className=""
              loop={true}
              autoplay={true}
              style={{ width: 400, height: 400 }}
              animationData={cryptoAnimation}
            />
          </div>
        </div>
      </section>
      <section className="subscribe-plans" id="subscribe">
        <div className="container">
          <div className="wrong-msg">
            <p className="msg">Please Log in first</p>
          </div>
          <h2 className="title">Choose Api Subscription Plan</h2>
          <div className="subscribe-box">
            <div className="subscribe-card">
              <h3>Basic</h3>
              <p className="sub-title">Basic personal use</p>
              <h2 className="price">$59.99</h2>
              <p className="time">Per Month</p>
              <ul className="features-list">
                <li>11 data endpoints</li>
                <li>10K call credits/mo</li>
                <li>No historical data</li>
                <li>Personal use</li>
              </ul>
              <a id="Msg" className="select-plan">
                Select Plan
              </a>
            </div>
            <div className="subscribe-card active">
              <h3>Startup</h3>
              <p className="sub-title">For commercial use</p>
              <h2 className="price">$99.99</h2>
              <p className="time">Per Month</p>
              <ul className="features-list">
                <li>23 data endpoints</li>
                <li>300K call credits/mo</li>
                <li>24 months of historical data</li>
                <li>Commercial use</li>
              </ul>
              <a id="Msg" className="select-plan">
                Select Plan
              </a>
            </div>
            <div className="subscribe-card">
              <h3>Professional</h3>
              <p className="sub-title">Best for scaling crypto projects</p>
              <h2 className="price">$149.99</h2>
              <p className="time">Per Month</p>
              <ul className="features-list">
                <li>All data endpoints</li>
                <li>3M call credits/mo</li>
                <li>All time historical data</li>
                <li>Commercial use</li>
              </ul>
              <a id="Msg" className="select-plan">
                Select Plan
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials" id="testimonials">
        <div className="container">
          <h2 className="title">What Our Users Say</h2>
          <div className="testimonials-box">
            {testimonialItems.map((item, index) => (
              <div key={index} className="testimonial-card">
                <img src={item.image} alt="" />
                <h3>{item.name}</h3>
                <p className="user-title">{item.userTitle}</p>
                <p className="testimonial-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Call To Action */}
      <section className="call-to-action" id="cta">
        <div className="container">
          <h2>Ready to Dive into the World of Cryptocurrency?</h2>
          <p>
            Join CryptoHub today and get instant access to real-time prices,
            advanced analytics, and more. Don’t miss out on the next big
            opportunity!
          </p>
          <a id="Msg" className="cta-button">
            Get Started Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
