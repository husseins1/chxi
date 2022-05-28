import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';


const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  return (
    <>
      <style jsx>
        {`
          .app__video {
            height: 100vh;
            position: relative;
          }

          .app__video video {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .app__video-overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.65);
          }

          .app__video-overlay_circle {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            border: 1px solid var(--color-golden);
            cursor: pointer;
          }
        `}
      </style>
      <div className="app__video">
        <video
          ref={vidRef}
          src={meal}
          type="video/mp4"
          loop
          controls={false}
          muted
        />
        <div className="app__video-overlay flex__center">
          <div
            className="app__video-overlay_circle flex__center"
            onClick={() => {
              setPlayVideo(!playVideo);
              if (playVideo) {
                vidRef.current.pause();
              } else {
                vidRef.current.play();
              }
            }}
          >
            {playVideo ? (
              <BsPauseFill color="#fff" fontSize={30} />
            ) : (
              <BsFillPlayFill color="#fff" fontSize={30} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
