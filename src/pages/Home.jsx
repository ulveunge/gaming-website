import "./Home.scss";

import Button from "../components/Button/Button";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";
import React from "react";
import SeeAllButton from "../components/SeeAllButton/SeeAllButton";
import TrendingGamesSlider from "../components/TrendingGamesSlider/TrendingGamesSlider";
import gameReviewData from "../data/gameReview";
import trendingGamesData from "../data/trendingGamesData";
import useBodyClass from "../hooks/useBodyClass";

const Home = () => {
  useBodyClass("body__home");

  return (
    <>
      <Header>
        <span className="header__proved-by">Hello there!</span>
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
            <TrendingGamesSlider
              className="trending-games-section__slider"
              data={trendingGamesData}
            />
          </section>
          <section className="home__game-review game-review">
            <h3 className="game-review__title title title--big">
              {gameReviewData.title}
            </h3>
            <div className="game-review__content">
              <h4 className="game-review__short-description title">
                {gameReviewData.shortDescription}
              </h4>
              <div className="game-review__long-description">
                <p className="game-review__text">
                  {gameReviewData.longDescription}
                </p>
                <br />
                <Link
                  to={gameReviewData.link}
                  className="game-review__link link link--underline"
                >
                  Learn more
                </Link>
              </div>
              <div className="game-review__image-wrapper">
                <div className="game-review__image card-effect">
                  <img src={gameReviewData.img} alt={gameReviewData.imgAlt} />
                </div>
              </div>
            </div>
          </section>
        </Container>
      </main>
    </>
  );
};

export default Home;
