import Image from "next/image";
import MenuPage from "../components/MenuPage/MenuPage";
import { SpecialMenu } from "../container";


export default function menu() {
  return (
    <>
      <style jsx>
        {`
          .container {
            background: var(--color-black);
            color: white;
            margin-top: 0;
            padding-top: 0.1rem;
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
      <div className="container">
        <h1 className="heading">Menu</h1>
        <div className="catagories">
          <div className="catagory">
            <Image
              width={200}
              height={200}
              objectFit="cover"
              className="catagory__img"
              src="/food.jpg"
              style={{
                borderRadius: "50%",
              }}
            />
            <h2 className="catagory-title">Wines</h2>
          </div>
          <div className="catagory">
            <Image
              width={200}
              height={200}
              objectFit="cover"
              className="catagory__img"
              src="/food.jpg"
              style={{
                borderRadius: "50%",
              }}
            />
            <h2 className="catagory-title">Wines</h2>
          </div>
          <div className="catagory">
            <Image
              width={200}
              height={200}
              objectFit="cover"
              className="catagory__img"
              src="/food.jpg"
              style={{
                borderRadius: "50%",
              }}
            />
            <h2 className="catagory-title">Wines</h2>
          </div>
        </div>
        <div className="food">
          <MenuPage />
        </div>
      </div>
    </>
  );
}
