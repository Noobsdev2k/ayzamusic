import React from "react";

export default function Songs() {
  return (
    <div className="content-item">
      <div className="block-box">
        <h2 className="heading">Most popular</h2>
        <span className="count">92 Songs</span>
      </div>
      <div className="song-list">
        <div className="song" data-index="0">
          <span className="song-index">01</span>
          <img
            src="https://cdn.dribbble.com/users/3960463/screenshots/13952774/media/1083c2b91054c7d7ee7c0bd47d60d5e0.png?compress=1&resize=800x600"
            alt=""
            className="song-image"
          />
          <i className="fa fa-play song-play"></i>
          <h4 className="song-title">AmpyX Holo</h4>
          <h5 className="song-album">Pop King</h5>
          <time className="song-time">3:49</time>
          <label for="love" className="song-love">
            <input type="checkbox" name="love" id="love" />
            <i className="fa fa-heart song-heart"></i>
          </label>
        </div>
        <div className="song" data-index="1">
          <span className="song-index">02</span>
          <img
            src="https://cdn.dribbble.com/users/3960463/screenshots/14808856/media/09a06e9c0d0f897dd9ea1f038541c495.png?compress=1&resize=1000x750"
            alt=""
            className="song-image"
          />
          <i className="fa fa-play song-play"></i>
          <h4 className="song-title">AmpyX Home</h4>
          <h5 className="song-album">Pop King</h5>
          <time className="song-time">5:00</time>
          <label for="love1" className="song-love">
            <input type="checkbox" name="love" id="love1" />
            <i className="fa fa-heart song-heart"></i>
          </label>
        </div>
        <div className="song" data-index="2">
          <span className="song-index">03</span>
          <img
            src="https://cdn.dribbble.com/users/3960463/screenshots/14630140/media/c79331860d7ca1b97430a4888617f428.png?compress=1&resize=1000x750"
            alt=""
            className="song-image"
          />
          <i className="fa fa-play song-play"></i>
          <h4 className="song-title">AmpyX Spark</h4>
          <h5 className="song-album">Pop King</h5>
          <time className="song-time">4:02</time>
          <label for="love2" className="song-love">
            <input type="checkbox" name="love" id="love2" />
            <i className="fa fa-heart song-heart"></i>
          </label>
        </div>
        <div className="song" data-index="3">
          <span className="song-index">04</span>
          <img
            src="https://cdn.dribbble.com/users/3960463/screenshots/14516886/media/bc272ecce9bec415eb28b7fe65e99117.png?compress=1&resize=1000x750"
            alt=""
            className="song-image"
          />
          <i className="fa fa-play song-play"></i>
          <h4 className="song-title">Last Summer</h4>
          <h5 className="song-album">Pop King</h5>
          <time className="song-time">2:46</time>
          <label for="love3" className="song-love">
            <input type="checkbox" name="love" id="love3" />
            <i className="fa fa-heart song-heart"></i>
          </label>
        </div>
      </div>
    </div>
  );
}
