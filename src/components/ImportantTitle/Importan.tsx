import ReactPlayer from 'react-player/youtube';
import PlayIcon from '../../assets/img/play.png';
import {
  ImportantContainer,
  ImportantInfo,
  ImportantTitle,
  ImportantDescription,
  PlayerWrapper,
} from './ImportantStyle';
import { memo } from 'react';

export const Important = memo(() => {
  return (
    <ImportantContainer>
      <ImportantInfo>
        <ImportantTitle>Attention! Important information only for you</ImportantTitle>
        <ImportantDescription>
          A cup of invigorating and flavorful coffee can lift your mood. And a cup of coffee with
          great music can double your mood. So enjoy good music with a cup of our wonderful coffee.
          Rick Astley approves. c:
        </ImportantDescription>
      </ImportantInfo>
      <PlayerWrapper
        data-type="video"
        role="application"
        aria-label="Rick Astley - Never Gonna Give You Up (Official Music Video)"
      >
        <ReactPlayer
          className="react-player"
          light
          playing
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          width="100%"
          height="100%"
          config={{
            playerVars: { showinfo: 1 },
          }}
          playIcon={<img src={PlayIcon} alt="Button play video" />}
        />
      </PlayerWrapper>
    </ImportantContainer>
  );
});
