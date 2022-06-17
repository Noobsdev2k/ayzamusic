import React from "react";

export default function CardSongs(props) {
  const { _id, image_music } = props;
  return (
    <div className="song" key={_id}>
      <img src={image_music} alt="" className="song-image" />
      <i className="fa fa-play song-play"></i>
      <h4 className="song-title">AmpyX Holo</h4>
      <h5 className="song-album">Pop King</h5>
      <time className="song-time">3:49</time>
      <label htmlFor="love" className="song-love">
        <input type="checkbox" name="love" id="love" />
        <i className="fa fa-heart song-heart"></i>
      </label>
    </div>
  );
}
