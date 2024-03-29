import { useRouter } from "next/router";




const AboutUs = ({ content }) => {
  const router = useRouter()
  return (
    <>
      <style jsx>
        {`
          .app__aboutus {
            position: relative;
            min-height: 100vh;
          }

          .app__aboutus-overlay {
            position: absolute;
            inset: 0;
          }

          .app__aboutus-overlay img {
            width: 391px;
            height: 415px;
            z-index: 0;
          }

          .app__aboutus-content {
            width: 100%;
            z-index: 2;
          }

          .app__aboutus-content_about {
            flex: 1;
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            flex-direction: column;

            text-align: right;
          }

          .app__aboutus-content_knife {
            margin: 2rem 4rem;
          }

          .app__aboutus-content_knife img {
            height: 310px;
          }

          .app__aboutus-content_history {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            // position: absolute;
            // width: 500px;
            // right: 50%;

            text-align: ${router.pathname.includes("ar") ? "right" : "left"};
          }
          .bag {
            // position: absolute;
            // right: 0;
            // bottom: 0;
            // height: 90%;
          }
          .bag{
            width:90%;
          }
          @media screen and (min-width: 1200px) {
            .bag {
              position: absolute;
              right: 0;
              bottom: 0;
              height: 90%;
              width:unset;
            }
            .app__aboutus-content_history {
              position: absolute;
              width: 500px;
              right: 50%;
            }
          }

          .app__aboutus-content_about p,
          .app__aboutus-content_history p {
            margin: 2rem 0;
            // color: var(--color-grey);
            color: white;
          }

          @media screen and (min-width: 2000px) {
            .app__aboutus-content_knife img {
              height: 1110px;
            }

            .app__aboutus-content_about p,
            .app__aboutus-content_history p {
              margin: 4rem 0;
            }
          }

          @media screen and (max-width: 900px) {
            .app__aboutus-content {
              flex-direction: column;
            }

            .app__aboutus-content_knife {
              margin: 4rem 0;
            }
          }

          @media screen and (max-width: 650px) {
            .app__aboutus-overlay img {
              width: 80%;
              height: 320px;
            }
            
          }
        `}
      </style>
      <div
        className="app__aboutus app__bg flex__center section__padding"
        id="about"
      >
        <div className="app__aboutus-content flex__center">
          {/* <div className="app__aboutus-content_about">
            <h1 className="headtext__cormorant">
              {router.pathname.includes("ar") ? "حول" : "About Us"}
            </h1>
            <img src="/spoon.png" alt="about_spoon" className="spoon__img" />
            <p className="p__opensans">{content.aboutUs}</p>
            <button type="button" className="custom__button">
              <a target="_blank" href="https://www.instagram.com/chixi.rest/">
                {router.pathname.includes("ar") ? "اعرف اكثر" : "Know More"}
              </a>
            </button>
          </div> */}

          {/* <div className="app__aboutus-content_knife flex__center"> */}
          <img className="bag" src="2021.png" alt="about_knife" />
          {/* </div> */}

          <div className="app__aboutus-content_history">
            <h1 className="headtext__cormorant">
              {router.pathname.includes("ar") ? "حول" : "About Us"}
            </h1>
            <img src="/spoon.png" alt="about_spoon" className="spoon__img" />
            <p className="p__opensans">{content.historyOf}</p>
            <button type="button" className="custom__button">
              <a target="_blank" href="https://www.instagram.com/chixi.rest/">
                {router.pathname.includes("ar") ? "اعرف اكثر" : "Know More"}
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );};

export default AboutUs;
