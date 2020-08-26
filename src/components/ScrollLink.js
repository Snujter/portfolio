import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import styles from "./ScrollLink.module.scss";
import { getClassName } from "../helpers";

const ScrollTo = ({ id, children, hasUnderline = true }) => (
  <span
    className={getClassName({ [styles.underline]: hasUnderline }, [
      styles.link,
    ])}
    onClick={() => scrollTo(id)}
  >
    {children}
  </span>
);

export default ScrollTo;
