import React from "react";
import styles from "./HamburgerIcon.module.scss";
import { getClassName } from "../../helpers";

const HamburgerIcon = ({isOpen, ...props}) => (
    <div
        className={getClassName({ [styles.hide]: !isOpen }, [styles.icon])}
        {...props}
    >
        <div />
        <div />
        <div />
    </div>
);

export default HamburgerIcon;
