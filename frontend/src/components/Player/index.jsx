import React from "react";

export default function Player() {
  return (
    <div className="content-item">
      <div className="block-box">
        <h2 className="heading">Now playing</h2>
        <span className="count">55 Items on the list</span>
      </div>
      <div className="player">
        <div className="player-box">
          <div className="player-media">
            <img
              src="https://cdn.dribbble.com/users/3960463/screenshots/14630140/media/c79331860d7ca1b97430a4888617f428.png?compress=1&resize=800x600"
              alt=""
              className="player-image"
            />
          </div>
          <h3 className="player-title title">AmpyX Holo</h3>
          <span className="player-author author">Pop King</span>
          <div className="progress">
            <input
              type="range"
              id="progress-bar"
              min="0"
              max=""
              value="0"
              className="bar"
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
