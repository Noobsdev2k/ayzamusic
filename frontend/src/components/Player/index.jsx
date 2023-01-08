import React from "react";

import TimeSlider from "react-input-slider";
import { UseMusic } from "../../hooks/useMusic";
import { format } from "../../hooks/useTime";

export default function Player() {
  const {
    resultMusic,
    handleOnAudio,
    handleOnRandomMusic,
    handleOnNextPrevMusic,
    handleOnPauseMusic,
  } = UseMusic();
  const { data, index, audio, playing } = resultMusic;
  const tempData = React.useMemo(() => data, [data]);
  const { src_music, image_music, name_singer, link_mv, name_music } = tempData;

  // create state
  const [loop, setLoop] = React.useState(false);
  const audioRef = React.useRef(0);
  const [duration, setDuration] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [isRandom, setIsRandom] = React.useState(false);
  const [volume, setVolume] = React.useState(50);
  //  function
  const handleLoadedData = React.useCallback(() => {
    setDuration(audioRef.current.duration);
    handleOnAudio(audioRef.current);
  }, [handleOnAudio]);

  const onTimeUpdate = React.useCallback(() => {
    setCurrentTime(audioRef.current.currentTime);
    if (audioRef.current.currentTime === audioRef.current.duration) {
      if (!loop) handleOnPauseMusic(!playing);
      if (isRandom) handleOnRandomMusic();
    }
  }, [handleOnPauseMusic, handleOnRandomMusic, isRandom, loop, playing]);

  const handlePausePlayClick = React.useCallback(() => {
    if (playing) audio?.pause();
    else audio?.play();
    handleOnPauseMusic(!playing);
  }, [audio, handleOnPauseMusic, playing]);

  const handleTimeSliderChange = React.useCallback(
    (position) => {
      const { x } = position;
      audioRef.current.currentTime = x;
      setCurrentTime(x);
      if (!playing) {
        handleOnPauseMusic(true);
        audioRef.current.play();
      }
    },
    [handleOnPauseMusic, playing]
  );
  const handleOnVolumeChange = React.useCallback((value) => {
    const volume = (audioRef.current.volume = value / 100);
    setVolume(volume * 100);
  }, []);

  return (
    <div className="content-item">
      <div className="block-box">
        <h2 className="heading">Now playing</h2>
        <span className="count">55 Items on the list</span>
      </div>
      <div className="player">
        <div className="player-box">
          <div className="player-media">
            {!image_music ? (
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                alt=""
                className="player-image"
              />
            ) : (
              <img src={image_music} alt="" className="player-image" />
            )}
          </div>
          <h3 className="player-title title">{name_singer}</h3>
          <span className="player-author author">Pop King</span>
          <div className="progress">
            <TimeSlider
              axis="x"
              xmax={duration}
              x={currentTime}
              onChange={handleTimeSliderChange}
              className="bar"
              styles={{
                track: {
                  backgroundColor: "#e3e3e3",
                  height: "8px",
                  width: "100%",
                  borderRadius: "8px",
                },
                active: {
                  height: "8px",
                  width: "100%",
                  borderRadius: "8px",
                  background: "linear-gradient(90deg,#008aff,#00ffe7)",
                },
                thumb: {
                  width: "13px",
                  height: "13px",
                  background: "linear-gradient(90deg,#008aff,#00ffe7)",
                  borderRadius: "50%",
                },
              }}
            />
            <audio
              src={src_music}
              controls
              loop={loop}
              autoPlay
              ref={audioRef}
              onLoadedData={handleLoadedData}
              onTimeUpdate={onTimeUpdate}
              hidden
            />
          </div>
          <div className="player-number">
            <span className="player-duration">{format(currentTime)}</span>
            <span className="player-remaining">{format(duration)}</span>
          </div>
        </div>
        <div className="flex">
          <div className="player-tool">
            <i
              className="fa fa-backward player-prev"
              onClick={() => handleOnNextPrevMusic(index - 1)}
            ></i>
            {playing ? (
              <i
                className="fa fa-pause player-play"
                onClick={() => handlePausePlayClick()}
              ></i>
            ) : (
              <i
                className="fa fa-play player-play"
                onClick={() => handlePausePlayClick()}
              ></i>
            )}

            <i
              className="fa fa-forward player-next"
              onClick={() => handleOnNextPrevMusic(index + 1)}
            ></i>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            className="player-volume"
            onChange={(e) => handleOnVolumeChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
