import React from "react";
import styles from "./AboutMe.module.scss";
import ColouredText from "./ColouredText";
import Fade from "react-reveal/Fade";
import Title from "./Title";

const AboutMe = () => (
  <section id="about-me" className={styles.container}>
    <div className={styles.box}>
      <Fade>
        <Title>About me</Title>
      </Fade>
      <Fade bottom>
        <div className={styles.subtitle}>
          I’m Tom, a professional web developer and web designer based in
          London.
        </div>
        <p>
          I’ve mostly worked using the <ColouredText>LAMP</ColouredText>-stack,
          but I have a fair bit of experience with the{" "}
          <ColouredText>JAM</ColouredText>
          -stack as well - my latest projects were written using Gatsby and
          Netlify CMS.
        </p>
        <p>
          I also recently picked up <ColouredText>Python</ColouredText> and{" "}
          <ColouredText>Unity</ColouredText> as a hobby!
        </p>
      </Fade>
    </div>
  </section>
);

export default AboutMe;
