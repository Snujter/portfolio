import React from "react";
import styles from "./Title.module.scss";

const Title = ({ children, className, ...props }) => (
  <span className={[className, styles.title].join(" ")} {...props}>
    {children}
  </span>
);

export default Title;
