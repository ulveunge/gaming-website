import React from "react";
import icons from "../../assets/icons.svg";

const Icon = ({ id, className }) => {
  return (
    <svg role="img" className={className}>
      <use xlinkHref={`${icons}#${id}`} />
    </svg>
  );
};

export default Icon;
