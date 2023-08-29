import "./Logo.scss";

import React from "react";
import classNames from "classnames";

const Logo = ({ className }) => {
  return (
    <div className={classNames("logo", className)}>
      <span>Logo</span>
    </div>
  );
};

export default Logo;
