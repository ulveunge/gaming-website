import "./Contact.scss";

import Header from "../components/Header/Header";
import React from "react";
import useBodyClass from "../hooks/useBodyClass";

const Contact = () => {
  useBodyClass("body__contact");

  return (
    <>
      <Header></Header>
    </>
  );
};

export default Contact;
