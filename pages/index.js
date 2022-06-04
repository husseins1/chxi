import Head from "next/head";
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
 
  SpecialMenu,
} from "../container";
import { Navbar } from "../components";
import { getHome } from "../services";
import styles from "../styles/Home.module.css";





export default function Home({hero:{heroes,abouts,categories,galleries,words}}) {

  
  return (
    <div className={styles.en}>
      <Navbar />
      <Header content={heroes[0]} />
      <AboutUs content={abouts[0]} />
      <SpecialMenu content={categories} />
      <Chef content={words[0]} />
      <Intro />
      <Gallery content={galleries} />
      <FindUs />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const hero = await getHome("en");

  return {
    props: {
      hero,
    },
    revalidate: 60,
  };
}