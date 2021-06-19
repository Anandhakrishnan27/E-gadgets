
import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/egadgets.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> E-gadgets </h1>
        <p> <b>All accessories in one place</b></p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
