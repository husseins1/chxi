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
} from "../../container";
import { Navbar } from "../../components";
import { getHome } from "../../services";
import styles from "../../styles/HomeAr.module.css";
import { useRouter } from "next/router";

export default function Home({
  hero: { heroes, abouts, categories, galleries, words },
}) {
    const {pathname} = useRouter();
    const ar = pathname.includes("ar");
  return (
    <div dir="rtl" className={styles.en}>
      <Head>
        <title>Chxi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="مطعم تشكسي, مطعم عراقي لكل عراقي"
        />
      </Head>
      <Navbar />
      <Header content={heroes[0]} />
      <AboutUs content={abouts[0]} />
      <SpecialMenu content={categories} />
      <Chef ar={ar} content={words[0]} />
      <Intro />
      <Gallery ar={ar} content={galleries} />
      <FindUs ar={ar} />
      <Footer ar={ar} />
    </div>
  );
}

export async function getStaticProps() {
  const hero = await getHome("ar");

  return {
    props: {
      hero,
    },
    revalidate: 60,
  };
}
