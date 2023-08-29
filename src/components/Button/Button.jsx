import "./Button.scss";

import { Link } from "react-router-dom";
import React from "react";
import classNames from "classnames";

const Button = ({
  onClick,
  link,
  to,
  rounded,
  roundedCorners,
  className,
  children,
}) => {
  const classes = classNames(
    "btn",
    {
      "btn--rounded": rounded,
      "btn--rounded-corners": roundedCorners,
    },
    className
  );

  return (
    <>
      {!link ? (
        <button className={classes} onClick={onClick}>
          {children}
        </button>
      ) : (
        <Link className={classes} to={to}>
          {children}
        </Link>
      )}
    </>
  );
};

export default Button;
