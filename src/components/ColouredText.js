import React from 'react';
import styles from "./ColouredText.module.scss";

const ColouredText = ({children, className, ...props}) => (
    <span className={[className, styles.colored].join(" ")} {...props}>
        {children}
    </span>
);

export default ColouredText;
