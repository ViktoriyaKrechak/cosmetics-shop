import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { joinClasses } from "../../helpers";

import classes from "./index.module.scss";

const LINKS = [
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/about",
    text: "About us",
  },
  {
    to: "/sign",
    text: "Sign in",
  },
];

export default function Header() {
  return (
    <div className={classes.wrap}>
      <div className={classes.logo}>BeautyLab</div>
      <nav className={classes.menu}>
        {LINKS.map((link) => (
          <NavLink
            key={link.to}
            className={({ isActive }) =>
              joinClasses(classes.link, isActive && classes.active)
            }
            to={link.to}
          >
            {link.text}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
