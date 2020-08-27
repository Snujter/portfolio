import React from 'react';
import styles from './Hero.module.scss';
import ColouredText from "./ColouredText";
import Fade from 'react-reveal/Fade';
import Img from "gatsby-image";
import PrimaryButton from "./PrimaryButton";
import { useStaticQuery, graphql } from "gatsby";

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
        <div className={styles.heroImgContainer}>
            <Img
                className={styles.heroImg}
                fluid={data.heroImage.childImageSharp.sizes}
                alt="Hero Banner"
            />
        </div>
    );
};

const Hero = () => (
    <section id="home" className={styles.intro}>
        <HeroBanner/>
        <div className={styles.container}>
            <Fade>
                <h1>
                    <div className={styles.hello}>
                        Hi, my name is
                    </div>
                    <div className={styles.name}>
                        <ColouredText>Tamas Schneider</ColouredText>
                    </div>
                </h1>
            </Fade>
            <Fade bottom>
                <h2 className={styles.description}>
                    I’m a Full-Stack Web Developer working in HTML, CSS, JavaScript and PHP.
                </h2>
                <div className={styles.btnGroup}>
                    <PrimaryButton className={styles.readMore}>Read more</PrimaryButton>
                    <PrimaryButton inverted>Contact me</PrimaryButton>
                </div>
            </Fade>
        </div>
    </section>
);

export default Hero;
