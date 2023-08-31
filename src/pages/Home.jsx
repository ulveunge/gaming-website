import "./Home.scss";

import Button from "../components/Button/Button";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import React from "react";
import SeeAllButton from "../components/SeeAllButton/SeeAllButton";
import TrendingGames from "../components/TrendingGames/TrendingGames";
import trendingGamesData from "../data/trendingGamesData";
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
      <main className="home">
        <Container size="14.7rem">
          <section className="home__trending-games trending-games-section">
            <div className="trending-games-section__info">
              <h3 className="trending-games-section__title title title--big">
                Currently Trending Games
              </h3>
              <SeeAllButton className="trending-games-section__see-all-btn" />
            </div>
            <TrendingGames data={trendingGamesData} />
          </section>
        </Container>
      </main>
    </>
  );
};

export default Home;
