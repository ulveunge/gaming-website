import "./TrendingGameCard.scss";

import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";
import React from "react";
import classNames from "classnames";
import { useSwiperSlide } from "swiper/react";

const TrendingGameCard = ({ data, className }) => {
  const { isActive } = useSwiperSlide();

  return (
    <div
      className={classNames(className, "trending-game-card", {
        active: isActive,
      })}
    >
      <Link to={data.link}>
        <div className="trending-game-card__image card-effect">
          <img src={data.img} alt={data.gameName} />
        </div>
      </Link>
      <div className="trending-game-card__info">
        <Icon className="trending-game-card__fire-icon" id="fire" />
        <span className="trending-game-card__followers">
          {data.followers} Followers
        </span>
      </div>
    </div>
  );
};

export default TrendingGameCard;
