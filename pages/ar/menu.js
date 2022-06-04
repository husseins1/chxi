import Image from "next/image";
import MenuPage from "../../components/MenuPage/MenuPage";
import styles from "../../styles/Home.module.css";
import { useState, useEffect } from "react";
import { Model } from "../../components";
import { getItems, getMenu } from "../../services";
import Link from "next/link";
import { useRouter } from "next/router";
export default function menu({ result: { categories } }) {
  const [select, setSelect] = useState(categories[0].title);
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);
  const [item, setItem] = useState({});
  const {pathname} = useRouter();
  const ar = pathname.includes("ar");
  const hideModel = () => setShow(false);
  const showModel = (item) => {
    setShow(true);
    setItem(item);
  };
  console.log(categories)
  useEffect(() => {
    (async function () {
      const {
        categories: [{ items }],
      } = await getItems("ar", select);
      setItems(items);
    })();
  }, [select]);
  return (
    <>
      <style jsx>
        {`
          .container {
            background: var(--color-black);
            color: white;
            margin-top: 0;
            padding-top: 0.1rem;
            min-height: 100vh;
          }
          .heading {
            font-family: var(--font-base);
            text-align: center;
            margin: 2rem 0;
          }
          .catagories {
            text-align: center;
            font-family: var(--font-base);
            display: flex;
            justify-content: flex-start;
            align-items: center;
            overflow-x: auto;
            max-width: 90%;
            margin: 2rem auto;
            padding: 1rem 0;
          }

          .catagory {
            min-width: 100px;
            cursor: pointer;
          }
          .catagory:hover {
            color: var(--color-golden);
          }
          .catagory.active {
            color: var(--color-golden);
          }
          .catagory:not(:last-child) {
            margin-right: 1rem;
          }
          .catagory__img {
            border: 1px soild #000;
          }
          .hover: {
            color: var(--color-golden);
          }
          .food {
            padding: 1rem;
          }
        `}
      </style>
      <div dir="rtl" className={`container ${styles.en}`}>
        <div style={{ textAlign: "center" }}>
          <Link href={"/ar"}>
            <img src="/logo.svg" alt="logo" className={styles.logo} />
          </Link>
        </div>
        <h1 className="heading">{ar?"قائمة الطعام":"Menu"}</h1>
        <div className="catagories">
          {categories.map((catagory, index) => (
            <div
              onClick={() => setSelect(catagory.title)}
              key={index}
              className={`catagory ${select === catagory.title && "active"}`}
            >
              <Image
                width={200}
                height={200}
                objectFit="cover"
                className="catagory__img"
                src={catagory?.img?.url}
                style={{
                  borderRadius: "50%",
                }}
              />
              <h2 className="catagory-title">{catagory.title} </h2>
            </div>
          ))}
        </div>
        <div className="food">
          <MenuPage  title={select} content={items} showModel={showModel} />
        </div>
        <Model show={show} handleClose={hideModel}>
          <div style={{ textAlign: "center" }}>
            {item?.img?.url && (
              <Image
                alt={item.title}
                width={800}
                height={800}
                objectFit="cover"
                src={item.img?.url}
              />
            )}
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <h2>{item.price}</h2>
          </div>
        </Model>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const categories = await getMenu("ar");
  // console.log(await getItems("en","Chicken"))
  return {
    props: {
      result: categories,
    },
    revalidate: 60,
  };
}
