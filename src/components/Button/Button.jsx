import React from "react";
import classes from "./index.module.scss";

export default function Button({ children }) {
  return <button className={classes.button}>{children}</button>;
}
