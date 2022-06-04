import React from 'react';
import {
  BsInstagram,
  BsFacebook
} from "react-icons/bs";

import { SubHeading } from '../../components';


const FindUs = ({ ar }) => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading
        title={ar ? "تواصل" : "Contact"}
      />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        {ar ? "زورنا" : "Find Us"}
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          {ar
            ? "النجف, شارع الحزام الاخضر, بناية بيتزا بيتزا"
            : "Najaf, Green belt street, Pizza Pizza building"}
          <br />
          {ar ? "اتصل على 6464 للتوصيل" : "Call 6464 for delivery"}
          <br />
          <a
            href="
https://www.instagram.com/chixi.rest/"
          >
            <BsInstagram style={{ fontSize: "25px", margin: "5px" }} />
          </a>
          {"      "}
          <a href="https://www.facebook.com/chixi.rest/">
            <BsFacebook style={{ fontSize: "25px", margin: "5px" }} />
          </a>
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          {ar?"ساعات العمل":"Opening Hours"}
        </p>
        <p className="p__opensans"> 8:00 am - 12:00 am</p>
        <p className="p__opensans"> 8:00 am - 12:00 am</p>
      </div>
      <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
      >
       {ar?"زورونا":"Visit Us"}
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src="/findus.jpg" alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
