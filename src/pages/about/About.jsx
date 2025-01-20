import Lottie from "lottie-react";
import cryptoAnimation from "../../animation/aboutCrypto.json";
import "./about.css";

function About() {
  return (
    <section className="about">
      <h1 className="title">About CryptoHub</h1>
      <div className="container">
        <div className="content">
          <p className="desc">
            Welcome to <strong>CryptoHub</strong>, your one-stop platform for
            all things cryptocurrency. From market analysis and live updates to
            in-depth resources, we are here to empower you with the tools and
            knowledge you need to navigate the world of digital currencies.
          </p>
          <p className="desc">
            Our mission is to make cryptocurrency accessible to everyone,
            whether you're a seasoned investor or just getting started.
          </p>
        </div>
        <div className="animation">
          <Lottie
            className=""
            loop={true}
            autoplay={true}
            style={{ width: 500, height: 500 }}
            animationData={cryptoAnimation}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
