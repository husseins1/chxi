

import SubHeading from '../SubHeading/SubHeading';


const Newsletter = () => (
  <>
    <style jsx>
      {`
        .app__newsletter {
          padding: 2rem 4rem;
          border: 1px solid var(--color-golden);
          background: var(--color-black);
        }

        .app__newsletter-heading {
          text-align: center;
        }

        .app__newsletter-input {
          flex-direction: row;
          margin-top: 3rem;
        }

        .app__newsletter-input input {
          width: 620px;
          border: 1px solid var(--color-golden);
          border-radius: 5px;
          font-size: 1rem;
          font-family: var(--font-base);
          color: var(--color-white);

          margin-right: 2rem;
          padding: 0.75rem 1rem;
          background: var(--color-black);
        }

        .app__newsletter-input button {
          width: max-content;
        }

        @media screen and (min-width: 2000px) {
          .app__newsletter-input input {
            font-size: 2rem;
          }
        }

        @media screen and (max-width: 990px) {
          .app__newsletter-input {
            flex-direction: column;
            width: 100%;
          }

          .app__newsletter-input input {
            margin: 0 0 2rem 0;
            width: 100%;
          }
        }

        @media screen and (max-width: 650px) {
          .app__newsletter {
            padding: 2rem 0;
            border: none;
          }
        }

        @media screen and (max-width: 300px) {
          .app__newsletter-heading h1 {
            font-size: 32px;
            line-height: 50px;
          }
        }
      `}
    </style>
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder="Enter your email address" />
        <button type="button" className="custom__button">
          Subscribe
        </button>
      </div>
    </div>
  </>
);

export default Newsletter;
