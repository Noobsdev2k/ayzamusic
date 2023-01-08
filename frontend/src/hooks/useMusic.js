import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMusicById } from "../store/actions/music";
import {
  addIdPlaylist,
  addIndexMusic,
  musicStore,
  onAudio,
  onChooseMusic,
  onDropdownMusic,
  onNextPrevMusic,
  onPauseMusic,
  onPlaylist,
  onRandomMusic,
} from "../store/reducer/music";

export const UseMusic = () => {
  const resultMusic = useSelector(musicStore);
  //create store
  const { data, _id_music, index, playing, dropdownMusic, dataRandom, audio } =
    resultMusic;
  const { image_music, name_music, favorite, view } = data;
  // api dispatch
  const dispatch = useDispatch();
  const getMusicByIdAPI = React.useCallback(
    (params) => _id_music && dispatch(getMusicById(params)),
    [dispatch, _id_music]
  );
  const handleOnIndexMusic = (data) => dispatch(addIndexMusic(data));
  const handleOnNextPrevMusic = (index) => dispatch(onNextPrevMusic(index));
  const handleOnRandomMusic = () => dispatch(onRandomMusic());
  const handleOnPauseMusic = React.useCallback(
    (playing) => dispatch(onPauseMusic(playing)),
    [dispatch]
  );
  const handleOnAudio = (audio) => dispatch(onAudio(audio));
  const handleOnDropdownMusic = (dropdown) =>
    dispatch(onDropdownMusic(dropdown));
  const handleOnChooseMusic = (music) => dispatch(onChooseMusic(music));
  const handleOnPlaylist = (data) => dispatch(onPlaylist(data));
  const handleAddIdPlaylist = (id_playList) =>
    dispatch(addIdPlaylist(id_playList));
  // function
  const setTitleWebsite = React.useCallback(() => {
    if (_id_music) {
      const title = document.querySelector("title");
      const icons = document.querySelector("link[rel='icon']");
      icons.setAttribute("href", image_music);
      title.innerHTML = name_music;
      handleOnPauseMusic(true);
    }
  }, [_id_music, handleOnPauseMusic, image_music, name_music]);

  const handlePausePlayClick = React.useCallback(() => {
    if (playing) audio?.pause();
    else audio?.play();
    handleOnPauseMusic(!playing);
  }, [playing, audio, handleOnPauseMusic]);

  // useEffect
  React.useEffect(() => {
    setTitleWebsite();
  }, [_id_music, setTitleWebsite]);

  return {
    handlePausePlayClick,
    getMusicByIdAPI,
    handleOnIndexMusic,
    handleOnPauseMusic,
    handleOnNextPrevMusic,
    handleOnAudio,
    handleOnRandomMusic,
    handleOnDropdownMusic,
    handleOnChooseMusic,
    handleOnPlaylist,
    handleAddIdPlaylist,
    dropdownMusic,
    _id_music,
    playing,
    index,
    resultMusic,
    dataRandom,
    favorite,
    view,
  };
};
