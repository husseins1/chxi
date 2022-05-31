import React from 'react';

import { SubHeading } from '../../components';



const Header = ({content}) => (
  <>
    <style jsx>
      {`
        .app__header {
          background-color: var(--color-black);
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
        <h1 className="app__header-h1">{content.bigSlogn}</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          {content.text}{" "}
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src='/welcome.png' alt="header_img" />
      </div>
    </div>
  </>
);

export default Header;
