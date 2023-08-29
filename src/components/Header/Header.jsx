import "./Header.scss";

import { AnimatePresence, motion } from "framer-motion";
import { CgClose, CgMenuRight } from "react-icons/cg";
import React, { useCallback, useState } from "react";

import Button from "../Button/Button";
import Container from "../Container/Container";
import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import classNames from "classnames";
import { useLocation } from "react-router-dom";
import useOutsideClick from "../../hooks/useOutsideClick";

const Header = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const openMenuHandler = useCallback(() => {
    setMenuOpen(true);
  }, []);

  const closeMenuHandler = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const ref = useOutsideClick(closeMenuHandler);

  const contactUsButton = (
    <Button
      className="nav__contact-us-link btn--contact-us"
      link
      roundedCorners
      to="/contact"
    >
      Contact us
    </Button>
  );

  const linksList = (
    <ul className={classNames("nav__list", { open: menuOpen })}>
      <li className={classNames("nav__item", { active: pathname === "/" })}>
        <Link className="link" to="/">
          Home
        </Link>
        <Icon id="active-link" className="nav__pointer" />
      </li>
      <li
        className={classNames("nav__item", {
          active: pathname === "/about",
        })}
      >
        <Link className="link" to="/about">
          About us
        </Link>
        <Icon id="active-link" className="nav__pointer" />
      </li>
      <li
        className={classNames("nav__item", {
          active: pathname === "/services",
        })}
      >
        <Link className="link" to="/services">
          Services
        </Link>
        <Icon id="active-link" className="nav__pointer" />
      </li>
      <li
        className={classNames("nav__item", {
          active: pathname === "/news",
        })}
      >
        <Link className="link" to="/news">
          News
        </Link>
        <Icon id="active-link" className="nav__pointer" />
      </li>
      <li className="nav__item">{contactUsButton}</li>
    </ul>
  );

  return (
    <header className="header">
      <Container size={{ left: "5.5rem", right: "6.3rem" }}>
        <nav className="header__nav nav">
          <Logo />
          {linksList}
          <div className="nav--mobile">
            <button
              className="nav__button"
              onClick={menuOpen ? closeMenuHandler : openMenuHandler}
            >
              {menuOpen ? <CgClose size="24" /> : <CgMenuRight size="24" />}
            </button>
            {contactUsButton}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  ref={ref}
                  className="nav__mobile-container"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                >
                  {linksList}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
        <div className="header__content">{children}</div>
      </Container>
    </header>
  );
};

export default Header;
