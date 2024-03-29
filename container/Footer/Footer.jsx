import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';



const Footer = ({ ar }) => (
  <>
    <style jsx>
      {`
        .app__footer {
          width: 100%;
          position: relative;
          z-index: 1;

          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;

          background: var(--color-black);
          padding-top: 0;
        }

        .app__footer-links {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;

          margin-top: 5rem;
          padding: 0 2rem;
        }

        .app__footer-links_contact,
        .app__footer-links_logo,
        .app__footer-links_work {
          flex: 1;
          margin: 1rem;
          text-align: center;
        }

        .app__footer-links_logo img:first-child {
          width: 210px;
          margin-bottom: 1.5rem;
        }

        .app__footer-links_work p:nth-child(2n + 1) {
          margin-bottom: 1rem;
        }

        .app__footer-links_icons {
          margin-top: 0.5rem;
        }

        .app__footer-links_icons svg {
          color: var(--color-white);
          margin: 0.5rem;
          font-size: 24px;
          cursor: pointer;
        }

        .app__footer-links_icons svg:hover {
          color: var(--color-golden);
        }

        .app__footer-headtext {
          font-family: var(--font-base);
          color: var(--color-golden);
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: capitalize;
          font-size: 32px;
          line-height: 41.6px;
          margin-bottom: 1rem;
        }

        .footer__copyright {
          margin-top: 3rem;
        }

        @media screen and (min-width: 2000px) {
          .app__footer-headtext {
            font-size: 51px;
            line-height: 61.6px;
          }
        }

        @media screen and (max-width: 1150px) {
          .app__footer-links {
            align-items: center;
            flex-direction: column;
            padding: 0;
          }

          .app__footer-links_contact,
          .app__footer-links_logo,
          .app__footer-links_work {
            margin: 2rem 0;
            width: 100%;
          }
        }

        @media screen and (max-width: 650px) {
          .app__footer {
            padding: 0 0 2rem 0;
          }
        }

        @media screen and (max-width: 350px) {
          .app__footer-links_logo img:first-child {
            width: 80%;
          }
        }
        .appLink {
          color: var(--color-golden);
          display: block;
        }
      `}
    </style>
    <div className="app__footer section__padding" id="login">
      <FooterOverlay />
      <Newsletter ar={ar} />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">
            {ar ? "زورونا" : "تواصل معنا"}
          </h1>
          <p className="p__opensans">
            {ar
              ? "العراق-النجف الاشرف-شارع الحزام الاخضر"
              : "Najaf, Green belt street"}
          </p>
          <p className="p__opensans">
            {ar ? "او اتصل على الرقم المختصر" : "Delivery"}
          </p>
          <p className="p__opensans">{ar ? " 6464" : "Call 6464"}</p>
        </div>

        <div className="app__footer-links_logo">
          <img className="logo_img" src="/logo.svg" alt="footer_logo" />
          <p className="p__opensans">
            &quot;
            {ar ? "براند عراقي لكل عراقي" : "Iraqi brand for every Iraqi"}
            &quot;
          </p>
          <img
            src="/app-store-brands.svg"
            className="spoon__img"
            style={{ marginTop: 15 }}
          />
          <a
            className="appLink"
            href="https://miro.com/app/board/uXjVOr5Pfig=/?moveToWidget=3458764527890924691&cot=14"
          >
            {ar ? "حمل التطبيق " : "download app"}
          </a>
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">
            {ar ? "ساعات العمل" : "Opening Hours"}
          </h1>
          {/* <p className="p__opensans">Monday-Monday:</p> */}
          <p className="p__opensans">08:00 am - 12:00 am</p>
          {/* <p className="p__opensans">Saturday-Sunday:</p> */}
          {/* <p className="p__opensans">07:00 am - 11:00 pm</p> */}
        </div>
      </div>

      <div className="footer__copyright">
        <p className="p__opensans">
          Developed by{" "}
          <a
            href="https://panda-prog.com/"
            style={{ color: "var(--color-golden)", fontWeight: "bold" }}
          >
            Panda
          </a>
        </p>
      </div>
    </div>
  </>
);

export default Footer;
