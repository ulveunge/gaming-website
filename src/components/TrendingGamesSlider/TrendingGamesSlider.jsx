import "./TrendingGamesSlider.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import React from "react";
import TrendingGameCard from "../TrendingGameCard/TrendingGameCard";
import classNames from "classnames";

const TrendingGamesSlider = ({ data, className }) => {
  return (
    <Swiper
      className={classNames("trending-games-slider", className)}
      breakpoints={{
        320: {
          slidesPerView: 1.4,
        },
        768: {
          slidesPerView: 2.4,
        },
        1024: {
          slidesPerView: 4,
        },
        1248: {
          slidesPerView: 4,
          spaceBetween: 47,
        },
      }}
    >
      {data.map((trendingGame) => (
        <SwiperSlide
          key={trendingGame.id}
          className="trending-games-slider__slide"
        >
          <TrendingGameCard data={trendingGame} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TrendingGamesSlider;
