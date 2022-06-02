import Head from "next/head";
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "../container";
import { Navbar } from "../components";
import { getHome } from "../services";





export default function Home({hero:{heroes,abouts,categories,galleries,words}}) {

  
  return (
    <div>
      <Navbar />
      <Header content={heroes[0]} />
      <AboutUs content={abouts[0]} />
      <SpecialMenu content={categories} />
      <Chef content={words[0]} />
      <Intro />
      <Laurels />
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
  };
}