import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { SubHeading, Item } from '../../components';


const SpecialMenu = ({ content }) =>{ 
  const router = useRouter();
  return(
  <>
    <style jsx>
      {`
        .app__specialMenu {
          flex-direction: column;
          background: var(--color-black);
        }

        .app__specialMenu-title {
          margin-bottom: 2rem;
          text-align: center;
        }

        .app__specialMenu-menu {
          width: 100%;
          margin: 2rem 0;

          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: row;
        }

        .app__specialMenu-menu_heading {
          font-family: var(--font-base);
          font-weight: 600;
          font-size: 45px;
          line-height: 58.5px;
          letter-spacing: 0.04em;
          color: var(--color-white);
        }

        .app__specialMenu-menu_wine,
        .app__specialMenu-menu_cocktails {
          flex: 1;
          width: 100%;
          flex-direction: column;
        }

        .app__specialMenu-menu_img {
          width: 410px;
          margin: 0 2rem;
        }

        .app__specialMenu-menu_img img {
          width: 100%;
          height: auto;
        }

        .app__specialMenu_menu_items {
          display: flex;
          flex-direction: column;

          margin: 2rem 0;
          width: 100%;
        }

        @media screen and (min-width: 2000px) {
          .app__specialMenu-menu_img {
            width: 650px;
          }

          .app__specialMenu-menu_img img {
            height: 920px;
          }
        }

        @media screen and (max-width: 1150px) {
          .app__specialMenu-menu {
            flex-direction: column;
            align-items: center;
            width: 100%;
          }

          .app__specialMenu-menu_img {
            margin: 3rem 0;
          }
        }

        @media screen and (max-width: 650px) {
          .app__specialMenu-menu_img {
            width: 100%;
          }

          .app__specialMenu-menu_heading {
            font-size: 35px;
            line-height: 48.5px;
          }
        }
      `}
    </style>
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title={router.pathname.includes("ar")?"قائمة الطعام المختصة":"Menu that fits your palatte"} />
        <h1 className="headtext__cormorant">{router.pathname.includes("ar")?"اختصاصنا":"Today Special"}</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine  flex__center">
          <p className="app__specialMenu-menu_heading">{content[0].title}</p>
          <div className="app__specialMenu_menu_items">
            {content[0].items.map((wine, index) => (
              <Item
                key={wine.title + index}
                title={wine.title}
                price={wine.price}
                tags={wine.types}
              />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src="/menu.jpg" alt="menu__img" />
        </div>

        <div className="app__specialMenu-menu_cocktails  flex__center">
          <p className="app__specialMenu-menu_heading">{content[1].title}</p>
          <div className="app__specialMenu_menu_items">
            {content[1].items.map((cocktail, index) => (
              <Item
                key={cocktail.title + index}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 15 }}>
        <button type="button" className="custom__button">
          <Link href={router.route.includes("ar") ? "/ar/menu" : "/menu"}>
            {router.pathname.includes("ar")?"اعرض المزيد":"View More"}
          </Link>
        </button>
      </div>
    </div>
  </>
)};

export default SpecialMenu;
