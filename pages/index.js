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





export default function Home({hero:{heroes,aboutUs,categories,galleries,words}}) {

  console.log(heroes)
  return (
    <div>
      <Navbar />
      <Header content={heroes[0]} />
      <AboutUs content={aboutUs} />
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