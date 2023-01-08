import React from "react";
import { UseMusic } from "../../hooks/useMusic";

export default function CardSongs({
  timeFormat,
  nameMusic,
  image,
  _id,
  index,
  data,
  oneMusic,
  item,
  category,
}) {
  const {
    handleOnIndexMusic,
    _id_music,
    playing,
    handlePausePlayClick,
    handleOnChooseMusic,
    handleOnPlaylist,
  } = UseMusic();
  const active = _id_music === _id && playing;

  const onClickPlay = React.useCallback(() => {
    const tempData = { index, data, _id };
    if (_id === _id_music) handlePausePlayClick();
    else if (oneMusic && item) handleOnChooseMusic(item);
    else if (!oneMusic && item) handleOnPlaylist({ ...tempData, music: item });
    else handleOnIndexMusic(tempData);
  }, [
    _id,
    _id_music,
    data,
    handleOnChooseMusic,
    handleOnIndexMusic,
    handleOnPlaylist,
    handlePausePlayClick,
    index,
    item,
    oneMusic,
  ]);
  return (
    <div className="song" onClick={onClickPlay}>
      <img src={image} alt="" className="song-image" />
      {active ? (
        <i className="fa fa-pause song-play" onClick={onClickPlay}></i>
      ) : (
        <i className="fa fa-play song-play" onClick={onClickPlay}></i>
      )}

      <h4 className="song-title">{nameMusic}</h4>
      <h5 className="song-album">{category}</h5>
      <time className="song-time">{timeFormat}</time>
      <label htmlFor="love" className="song-love">
        <input type="checkbox" name="love" id="love" />
        <i className="fa fa-heart song-heart"></i>
      </label>
    </div>
  );
}
