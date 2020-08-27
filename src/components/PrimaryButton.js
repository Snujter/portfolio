import React from "react";
import styles from "./PrimaryButton.module.scss";
import LoadingIcon from "./LoadingIcon";

const PrimaryButton = ({
  type,
  children,
  className,
  loading,
  inverted,
  ...props
}) => (
  <button
    type={type || "button"}
    className={[
      styles.primaryButton,
      inverted ? styles.inverted : "",
      className,
    ].join(" ")}
    disabled={loading}
    {...props}
  >
    {loading ? <LoadingIcon /> : children}
  </button>
);

export default PrimaryButton;
