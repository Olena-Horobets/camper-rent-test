import { Player } from '@lottiefiles/react-lottie-player';

export function Loader() {
  return (
    <Player
      src="https://lottie.host/fe7d531a-bd2c-447e-a355-067289269d0e/m7PcWWTD61.json"
      speed="1"
      style={{
        width: 300,
        height: 300,
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      loop
      controls={false}
      autoplay
      direction="1"
      mode="normal"
    ></Player>
  );
}
