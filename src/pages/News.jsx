import "./News.scss";

import Header from "../components/Header/Header";
import React from "react";
import useBodyClass from "../hooks/useBodyClass";

const News = () => {
  useBodyClass("body__news");

  return (
    <>
      <Header></Header>
    </>
  );
};

export default News;
