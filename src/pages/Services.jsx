import "./Services.scss";

import Header from "../components/Header/Header";
import React from "react";
import useBodyClass from "../hooks/useBodyClass";

const Services = () => {
  useBodyClass("body__services");

  return (
    <>
      <Header></Header>
    </>
  );
};

export default Services;
