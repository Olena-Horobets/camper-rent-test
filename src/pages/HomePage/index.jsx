import s from './HopePage.module.css';
import video from 'videos/camperVideo.mp4';

import ReactPlayer from 'react-player';

function HomePage() {
  return (
    <div className={s.homePage}>
      <ReactPlayer
        className="react-player fixed-bottom"
        url={video}
        width="100%"
        height="100%"
        loop={true}
        playing={true}
        muted={true}
      />
      <h1 className={s.title}>Be free, live today.</h1>
    </div>
  );
}

export default HomePage;
