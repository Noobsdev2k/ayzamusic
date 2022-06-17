import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewMusic } from "../store/actions/newSongs";
import { newMusicStore } from "../store/reducer/newSongs";

export const UserNewSongs = () => {
  const resultNewMusic = useSelector(newMusicStore);
  const { data, loading, error } = resultNewMusic;
  // api dispatch
  const dispatch = useDispatch();
  const getNewMusicApi = (params) => {
    dispatch(getNewMusic(params));
  };
  // useEffect
  useEffect(() => {
    if (!data.length) {
      getNewMusicApi({ _limit: 16 });
    }
  }, [error]);

  return { data, loading };
};
