import Head from "next/head";
import {
  AboutUs,
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
      <Head>
        <title>Chxi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Chxi is a restaurant in the heart of the city of Najaf, Iraq. We offer a wide range of food and drinks, from the best of the best in the world." />
      
      </Head>
      <div className={styles.heroContainer}>
      <Navbar />
      <Header content={heroes[0]} />
        </div>
      <AboutUs content={abouts[0]} />
      <SpecialMenu content={categories} />
      {/* <Chef content={words[0]} /> */}
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