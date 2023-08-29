import "./About.scss";

import Header from "../components/Header/Header";
import React from "react";
import useBodyClass from "../hooks/useBodyClass";

const About = () => {
  useBodyClass("body__about");

  return (
    <>
      <Header></Header>
    </>
  );
};

export default About;
