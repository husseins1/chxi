import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import gericht from "../../assets/gericht.png";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const router = useRouter()
  return (
    <>
      <style jsx>
        {`
          .app__navbar {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: var(--color-black);

            padding: 1rem 2rem;
          }

          .app__navbar-logo {
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }

          .app__navbar-logo img {
            width: 90px;
          }

          .app__navbar-links {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;

            list-style: none;
          }

          .app__navbar-links li {
            margin: 0 1rem;
            cursor: pointer;
          }

          .app__navbar-links li:hover {
            color: var(--color-grey);
          }

          .app__navbar-login {
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }

          .app__navbar-login a {
            margin: 0 1rem;
            text-decoration: none;
            transition: 0.5s ease;
          }

          .app__navbar-login a:hover {
            border-bottom: 1px solid var(--color-golden);
          }

          .app__navbar-login div {
            width: 1px;
            height: 30px;
            background: var(--color-grey);
          }

          .app__navbar-smallscreen {
            display: none;
          }

          .app__navbar-smallscreen_overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: var(--color-black);
            transition: 0.5s ease;

            flex-direction: column;
            z-index: 5;
          }

          .app__navbar-smallscreen_overlay .overlay__close {
            font-size: 27px;
            color: var(--color-golden);
            cursor: pointer;

            position: absolute;
            top: 20px;
            right: 20px;
          }

          .app__navbar-smallscreen_links {
            list-style: none;
          }

          .app__navbar-smallscreen_links li {
            margin: 2rem;
            cursor: pointer;
            color: var(--color-golden);
            font-size: 2rem;
            text-align: center;
            font-family: "Avenir";
          }

          .app__navbar-smallscreen_links li:hover {
            color: var(--color-white);
          }

          @media screen and (min-width: 2000px) {
            .app__navbar-logo img {
              width: 210px;
            }
          }

          @media screen and (max-width: 1150px) {
            .app__navbar-links {
              display: none;
            }

            .app__navbar-smallscreen {
              display: flex;
            }
          }

          @media screen and (max-width: 650px) {
            .app__navbar {
              padding: 1rem;
            }

            .app__navbar-login {
              display: none;
            }

            .app__navbar-logo img {
              width: 110px;
            }
          }
        `}
      </style>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src="/logo.svg" alt="app__logo" />
        </div>
        <ul className="app__navbar-links">
          <li className="p__opensans">
            <a href="#home">
              {router.pathname.includes("ar") ? "الرئيسية" : "Home"}
            </a>
          </li>
          <li className="p__opensans">
            <a href="#about">
              {router.pathname.includes("ar") ? "حول" : "About"}
            </a>
          </li>
          <li className="p__opensans">
            <Link href={router.route.includes("ar") ? "/ar/menu" : "/menu"}>
              {router.pathname.includes("ar") ? "قائمة الطعام" : "Menu"}
            </Link>
          </li>

          <li className="p__opensans">
            <a href="#contact">
              {router.pathname.includes("ar") ? "التواصل" : "Contact"}
            </a>
          </li>
          <li className="p__opensans">
            <Link href={router.pathname.includes("ar") ? "/" : "/ar"}>
              {router.pathname.includes("ar") ? "En" : "عربي"}
            </Link>
          </li>
        </ul>
        <div className="app__navbar-login">
          <a href="#login" className="p__opensans">
            {router.pathname.includes("ar") ? "احجز طاولة" : "Book a table"}
          </a>
        </div>
        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu
            color="#fff"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu
                fontSize={27}
                className="overlay__close"
                style={{
                  fontSize: "27px",
                  color: "var(--color-golden)",
                  cursor: "pointer",

                  position: "absolute",
                  top: "20px",
                  right: "20px",
                }}
                onClick={() => setToggleMenu(false)}
              />
              <ul className="app__navbar-smallscreen_links">
                <li>
                  <a href="#home" onClick={() => setToggleMenu(false)}>
                    {router.pathname.includes("ar") ? "الرئيسية" : "Home"}
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={() => setToggleMenu(false)}>
                    {router.pathname.includes("ar") ? "حول" : "About"}
                  </a>
                </li>
                <li>
                  <Link
                    href={router.route.includes("ar") ? "/ar/menu" : "/menu"}
                  >
                    {router.pathname.includes("ar") ? "قائمة الطعام" : "Menu"}
                  </Link>
                </li>

                <li>
                  <a href="#contact" onClick={() => setToggleMenu(false)}>
                    {router.pathname.includes("ar") ? "التواصل" : "Contact"}
                  </a>
                </li>
                <li className="p__opensans">
                  <Link href={router.pathname.includes("ar") ? "/" : "/ar"}>
                    {router.pathname.includes("ar") ? "En" : "عربي"}
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
