import React, { useEffect, useState } from "react";
import styles from "./Navigation.module.scss";
import hamburgerStyles from "./HamburgerMenu.module.scss";
import Slide from "react-reveal/Slide";
import { getClassName } from "../../helpers";
import ScrollTo from "../ScrollLink";

const links = [
  { id: "#home", label: "Home" },
  { id: "#about-me", label: "About me" },
  { id: "#experience", label: "Experience" },
  { id: "#portfolio", label: "Portfolio" },
  { id: "#contact", label: "Contact" },
];

const NavigationLinkContainer = ({ links, handleClick, containerClasses }) => (
  <ul className={containerClasses}>
    {links.map(element => (
      <li key={element.id} onClick={handleClick}>
        <ScrollTo id={element.id}>{element.label}</ScrollTo>
      </li>
    ))}
  </ul>
);

const HamburgerMenu = ({ handleNavClick, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    setIsOpen(false);
    handleNavClick();
  };

  return (
    <div
      className={getClassName({ [hamburgerStyles.hide]: !isOpen }, [
        hamburgerStyles.hamburgerContainer,
      ])}
    >
      <div className={hamburgerStyles.hamburgerIcon} onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </div>
      <div className={hamburgerStyles.hamburgerMenu}>
        <NavigationLinkContainer
          handleClick={handleClick}
          links={links}
          containerClasses={hamburgerStyles.navLinks}
        />
      </div>
    </div>
  );
};

const Navigation = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [navigationHasBg, setNavigationHasBg] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const showNavigationBgAt = 100;

    setNavigationHasBg(currentScrollPos >= showNavigationBgAt);
    setVisible(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  const handleNavLinkClick = () => {
    setVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return function cleanup() {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Slide top>
      <header
        className={getClassName(
          {
            [styles.hidden]: !visible,
            [styles.navBg]: navigationHasBg,
          },
          [styles.navigationContainer]
        )}
      >
        <div className={styles.navigation}>
          <NavigationLinkContainer
            handleClick={handleNavLinkClick}
            containerClasses={styles.navLinks}
            links={links}
          />
          <HamburgerMenu handleNavClick={handleNavLinkClick} links={links} />
        </div>
      </header>
    </Slide>
  );
};

export default Navigation;
