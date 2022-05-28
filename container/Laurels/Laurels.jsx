import React from 'react';

import { SubHeading } from '../../components';
import { data } from '../../constants';


const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <>
    <style jsx>
      {`
        .app__laurels_awards {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;

          margin-top: 3rem;
        }

        .app__laurels_awards-card {
          flex: 1;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          min-width: 230px;

          margin: 1rem;
        }

        @media screen and (min-width: 1900px) {
          .app__laurels_awards-card {
            min-width: 390px;
          }
        }

        .app__laurels_awards-card img {
          width: 50px;
          height: 50px;
        }

        .app__laurels_awards-card_content {
          display: flex;
          flex-direction: column;
          margin-left: 1rem;
        }

        @media screen and (max-width: 450px) {
          .app__laurels_awards-card {
            min-width: 100%;
            margin: 1rem 0;
          }
        }
      `}
    </style>
    <div className="app__bg app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>

        <div className="app__laurels_awards">
          {data.awards.map((award) => (
            <AwardCard award={award} key={award.title} />
          ))}
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src='/laurels.png' alt="laurels_img" />
      </div>
    </div>
  </>
);

export default Laurels;
