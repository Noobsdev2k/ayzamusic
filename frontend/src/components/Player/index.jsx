import React from "react";
import { UseMusic } from "../../hooks/useMusic";

export default function Player() {
  const {
    resultMusic,
    handleOnDropdownMusic,
    playing,
    dropdownMusic,
    _id_music,
  } = UseMusic();
  const { data } = resultMusic;
  const tempData = React.useMemo(() => data, [data]);
  const { src_music, image_music, name_singer, link_mv, name_music } = tempData;
  return (
    <div className="content-item">
      <div className="block-box">
        <h2 className="heading">Now playing</h2>
        <span className="count">55 Items on the list</span>
      </div>
      <div className="player">
        <div className="player-box">
          <div className="player-media">
            <img src={image_music} alt="" className="player-image" />
          </div>
          <h3 className="player-title title">{name_singer}</h3>
          <span className="player-author author">Pop King</span>
          <div className="progress">
            <input
              type="range"
              id="progress-bar"
              min="0"
              max=""
              value="0"
              className="bar"
              onChange={() => {}}
            />
            <audio src="./files/holo.mp3" id="song"></audio>
          </div>
          <div className="player-number">
            <span className="player-duration">0:00</span>
            <span className="player-remaining">0:00</span>
          </div>
        </div>
        <div className="player-tool">
          <i className="fa fa-backward player-prev"></i>
          <i className="fa fa-play player-play"></i>
          <i className="fa fa-forward player-next"></i>
        </div>
      </div>
    </div>
  );
}
