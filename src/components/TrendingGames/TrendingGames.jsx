import "./TrendingGames.scss";

import React from "react";
import TrendingGameCard from "../TrendingGameCard/TrendingGameCard";
import classNames from "classnames";

const TrendingGames = ({ data, className }) => {
  return (
    <ul className={classNames("trending-games", className)}>
      {data.map((trendingGame) => (
        <TrendingGameCard
          className="trending-games__trending-game-card"
          data={trendingGame}
        />
      ))}
    </ul>
  );
};

export default TrendingGames;
