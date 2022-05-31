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





export default function Home({hero}) {
console.log(hero)
  
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
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