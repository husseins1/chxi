import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';



const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  return (
    <>
      <style jsx>
        {`
          .map {
            min-height: 100vh;
          }
          iframe {
            min-height: 100vh;
            width: 100%;
            display: block;
            filter: invert(90%);
            border:none;
          }
        `}
      </style>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.6590301302253!2d44.349503315118284!3d32.02434868120586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155ed71097c23d21%3A0xacffad3b4f90a42e!2sChixi!5e0!3m2!1sen!2siq!4v1653809589003!5m2!1sen!2siq"
          width="800"
          height="600"
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Intro;
