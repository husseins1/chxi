import React from 'react';

import { SubHeading } from '../../components';




const Chef = () => (
  <>
    <style jsx>
      {`
        .app__chef-content {
          display: flex;
          flex-direction: column;
          width: 100%;

          margin-top: 5rem;
        }

        .app__chef-content_quote {
          display: flex;
          justify-content: flex-start;
          align-items: flex-end;
        }

        .app__chef-content_quote img {
          width: 47px;
          height: 40px;
          margin: 0 1rem 1rem 0;
        }

        .app__chef-sign {
          width: 100%;
          margin-top: 3rem;
        }

        .app__chef-sign p:first-child {
          font-family: var(--font-base);
          font-weight: 400;
          font-size: 32px;
          line-height: 41.6px;
          letter-spacing: 0.04em;
          text-transform: capitalize;
          color: var(--color-golden);
        }

        .app__chef-sign img {
          width: 250px;
          margin-top: 3rem;
        }

        @media screen and (min-width: 2000px) {
          .app__chef-sign img {
            width: 370px;
          }
        }

        @media screen and (max-width: 450px) {
          .app__chef-sign img {
            width: 80%;
          }
        }
      `}
    </style>
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src='/chef.png' alt="chef_image" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="Chef's word" />
        <h1 className="headtext__cormorant">What we believe in</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src='/quote.png' alt="quote_image" />
            <p className="p__opensans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit
              .
            </p>
          </div>
          <p className="p__opensans">
            {" "}
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.{" "}
          </p>
        </div>

        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src='/sign.png' alt="sign_image" />
        </div>
      </div>
    </div>
  </>
);

export default Chef;
