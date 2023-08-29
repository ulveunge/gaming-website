import "./Home.scss";

import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import React from "react";
import useBodyClass from "../hooks/useBodyClass";

const Home = () => {
  useBodyClass("body__home");

  return (
    <>
      <Header>
        <span className="header__proved-by">Proved By prodesigner</span>
        <h2 className="title title--bigger header__title">
          Explore The Best Gaming Experience Online
        </h2>
        <div className="header__text">
          <p>
            Visit our website for the latest gaming news, reviews and tips. Our
            experts provide accurate information, and our community shares
            knowledge and helps players master their favorites. Check out our
            reviews to determine whether a game is worth trying. Explore our
            site for the best gaming experience.
          </p>
        </div>
        <Button
          className="header__get-in-touch btn--get-in-touch"
          link
          to="#0"
          rounded
        >
          Get in touch
        </Button>
      </Header>
    </>
  );
};

export default Home;
