import "./Container.scss";

import React, { useCallback, useEffect, useMemo, useRef } from "react";

import classNames from "classnames";

const Container = ({ size, margin, className, children }) => {
  const containerRef = useRef(null);

  const differentValues = useMemo(() => typeof size === "object", [size]);

  const setContainerProperty = useCallback(() => {
    if (differentValues && !margin) {
      containerRef.current.style.setProperty(
        "--container-padding-left",
        size.left
      );
      containerRef.current.style.setProperty(
        "--container-padding-right",
        size.right
      );
      return;
    }

    if (differentValues && margin) {
      containerRef.current.style.setProperty(
        "--container-margin-left",
        size.left
      );
      containerRef.current.style.setProperty(
        "--container-margin-right",
        size.right
      );
      return;
    }

    if (margin) {
      containerRef.current.style.setProperty("--container-margin-size", size);
      return;
    }

    containerRef.current.style.setProperty("--container-padding-size", size);
  }, [margin, size, differentValues]);

  useEffect(() => {
    if (!containerRef.current) return;

    setContainerProperty();
  }, [size, setContainerProperty, differentValues]);

  const classes = classNames(
    "container",
    {
      "container--same-values": !differentValues && !margin,
      "container--same-margin-values": !differentValues && margin,
      "container--different-values": differentValues && !margin,
      "container--different-margin-values": differentValues && margin,
    },
    className
  );

  return (
    <div ref={containerRef} className={classes}>
      {children}
    </div>
  );
};

export default Container;
