import "./SeeAllButton.scss";

import { Link } from "react-router-dom";
import React from "react";
import classNames from "classnames";

const SeeAllButton = ({ className }) => {
  return (
    <Link to="#0" className={classNames("see-all-btn", className)}>
      See All
    </Link>
  );
};

export default SeeAllButton;
