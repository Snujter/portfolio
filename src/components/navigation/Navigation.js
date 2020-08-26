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

const NavigationLink = ({id, label, ...props}) => (
  <li {...props}>
    <ScrollTo id={id}>{label}</ScrollTo>
  </li>
);

const NavigationLinkContainer = ({ links, handleLinkClick, classes }) => (
  <ul className={classes.container}>
    {links.map(element => (
        <NavigationLink
          id={element.id}
          key={element.id}
          label={element.label}
          onClick={handleLinkClick}
          className={classes.link}
        />
    ))}
  </ul>
);

const HamburgerMenu = ({ handleLinkClick, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    setIsOpen(false);
    handleLinkClick();
  };

  return (
    <div
      className={getClassName({ [hamburgerStyles.hide]: !isOpen }, [
        hamburgerStyles.hamburgerContainer,
        "hidden-md-up"
      ])}
    >
      <div className={hamburgerStyles.hamburgerIcon} onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </div>
      <div className={hamburgerStyles.hamburgerMenu}>
        <NavigationLinkContainer
          links={links}
          classes={{
            container: hamburgerStyles.navLinks,
            link: hamburgerStyles.navLink
          }}
          handleLinkClick={handleClick}
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
          [styles.navigationContainer, "container", "container--fluid"]
        )}
      >
        <div className={`row x-center y-center ${styles.navigation}`}>
          <NavigationLinkContainer
              links={links}
              classes={{
                container: "hidden-md-down",
                link: styles.navLink
              }}
              handleLinkClick={handleNavLinkClick}
          />
          <HamburgerMenu handleLinkClick={handleNavLinkClick} links={links} />
        </div>
      </header>
    </Slide>
  );
};

export default Navigation;
