import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { SubHeading } from '../../components';


const Header = ({content}) => {
  const router = useRouter()
  
  return (
    <>
      <style jsx>
        {`
          #home {
            padding: 1rem 6rem;
            align-items: flex-start;
            padding-top: 3rem;
          }

          .app__header-h1 {
            font-family: var(--font-base);
            color: var(--color-golden);
            font-weight: 700;
            letter-spacing: 0.04em;
            text-transform: capitalize;
            line-height: 117px;
            font-size: 90px;
          }

          .app__header-img img {
            width: 80%;
          }
          .hero__img {
            border: 10px solid var(--color-golden);
            width: 510px;
            height: 510px;
            object-fit: cover;
            display: block;
          }

          @media screen and (min-width: 2000px) {
            .app__header-h1 {
              font-size: 180px;
              line-height: 210px;
            }
          }

          @media screen and (max-width: 1150px) {
            .app__header-h1 {
              font-size: 90px;
            }
          }

          @media screen and (max-width: 650px) {
            .app__header-h1 {
              font-size: 70px;
              line-height: 87px;
            }
          }

          @media screen and (max-width: 450px) {
            .app__header-h1 {
              font-size: 50px;
              line-height: 70px;
            }
          }
        `}
      </style>
      <div className="app__header app__wrapper section__padding" id="home">
        <div className="app__wrapper_info">
          <SubHeading title={content.smallSlogn} />
          <h1 className="app__header-h1">
            {/* {content.bigSlogn} */}
            {router.route.includes("ar") ? "عراقي \n بنكهة تركية" : "Iraqi \n Turkish flavor"}
          </h1>
          <p className="p__opensans" style={{ margin: "2rem 0" }}>
            {content.text}{" "}
          </p>
          <button type="button" className="custom__button">
            <Link href={router.route.includes("ar") ? "/ar/menu" : "/menu"}>
              {router.route.includes("ar")
                ? "اكتشف قائمة الطعام"
                : "Explore Menu"}
            </Link>
          </button>
        </div>

        <div className="app__wrapper_img">
          <img className="hero__img" src="/shifdish34.jpg" alt="header_img" />
        </div>
      </div>
    </>
  );}

export default Header;
