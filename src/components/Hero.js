import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import styles from "./Hero.module.scss";
import { getClassName } from "../helpers";
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";
import ColouredText from "./ColouredText";
import PrimaryButton from "./PrimaryButton";
import ScrollTo from "./ScrollLink";

const HeroBanner = () => {
    const data = useStaticQuery(graphql`
        query {
            heroImage: file(relativePath: { eq: "hero-banner.jpg" }) {
                childImageSharp {
                    sizes(maxWidth: 1200, quality: 100) {
                        ...GatsbyImageSharpSizes
                    }
                }
            }
        }
    `);

    return (
        <div className={styles.bannerContainer}>
            <Img
                className={styles.banner}
                fluid={data.heroImage.childImageSharp.sizes}
                alt="Hero Banner"
            />
        </div>
    );
};

const Hero = () => (
    <section id="home" className={styles.heroContainer}>
        <HeroBanner/>
        <div className={[styles.hero, "container"].join(" ")}>
            <div className={styles.heroText}>
                <div>Hi, my name is</div>
                <div className={styles.name}>
                    <ColouredText>Tamas Schneider</ColouredText>
                </div>
                <div className={styles.description}>
                    I’m a Full-Stack Web Developer with more than 3 years of industry experience using HTML, CSS, JavaScript and PHP.
                </div>
            </div>
            <div className={`${styles.btnContainer} row x-center`}>
                <PrimaryButton className={styles.readMore}><ScrollTo id="about" hasUnderline={false}>Read more</ScrollTo></PrimaryButton>
                <PrimaryButton inverted><ScrollTo id="contact" hasUnderline={false}>Contact me</ScrollTo></PrimaryButton>
            </div>
        </div>
    </section>
);

export default Hero;
