import "./TrendingGameCard.scss";

import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";
import React from "react";
import classNames from "classnames";

const TrendingGameCard = ({ data, className }) => {
  return (
    <li className={classNames(className, "trending-game-card")}>
      <Link to={data.link}>
        <div className="trending-game-card__image">
          <img src={data.img} alt={data.name} />
        </div>
      </Link>
      <div className="trending-game-card__info">
        <Icon className="trending-game-card__fire-icon" id="fire" />
        <span className="trending-game-card__followers">
          {data.followers} Followers
        </span>
      </div>
    </li>
  );
};

export default TrendingGameCard;
