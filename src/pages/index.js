import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <AboutMe />
  </Layout>
);

export default IndexPage;
