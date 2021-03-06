import React from 'react';

import { SubHeading } from '../../components';




const Chef = ({content,ar}) => (
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
        <img src='/chef.jpg' alt="chef_image" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title={ar?"كلمة":"Word"} />
        <h1 className="headtext__cormorant">{content.slogan}</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src='/quote.png' alt="quote_image" />
            <p className="p__opensans">
              {content.quote.split(".")[0]}
            </p>
          </div>
          <p className="p__opensans">
            {content.quote.split(".").slice(1).join(".")}
          </p>
        </div>

        <div className="app__chef-sign">
          <p>{content.name}</p>
          <p className="p__opensans">{content.who}</p>
          
        </div>
      </div>
    </div>
  </>
);

export default Chef;
