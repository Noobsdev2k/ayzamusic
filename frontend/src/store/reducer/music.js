import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  loading: false,
  _id_music: "",
  id_playlist: "",
  dataRandom: [],
  index: 0,
  playing: true,
  audio: null,
  dropdownMusic: false,
  pagination: {},
  error: false,
};

const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    addIndexMusic: (state, action) => {
      const { data, index, _id } = action.payload;
      state.index = index;
      state.data = data[index];
      state._id_music = _id;
      state.dataRandom = data;
    },
    onNextPrevMusic: (state, action) => {
      const index = action.payload;
      if (index >= 0) {
        if (state.dataRandom[index]) {
          state.data = state.dataRandom[index];
          state.index = index;
          state._id_music = state.dataRandom[index]._id;
        }
      }
    },
    onRandomMusic: (state) => {
      const random = Math.floor(Math.random() * state.dataRandom.length);
      state.data = state.dataRandom[random];
      state._id_music = state.dataRandom[random]._id;
    },
    onPauseMusic: (state, action) => {
      state.playing = action.payload;
    },
    onAudio: (state, action) => {
      state.audio = action.payload;
    },
    onDropdownMusic: (state, action) => {
      state.dropdownMusic = action.payload;
    },
    onChooseMusic: (state, action) => {
      state.data = action.payload;
      state._id_music = action.payload._id;
    },
    onPlaylist: (state, action) => {
      const { data, index, _id, music } = action.payload;
      const template = [];
      data.forEach((element) => {
        if (element.music) template.push(element.music);
        else template.push(element);
      });
      if (music.music) {
        state.data = music.music;
        state._id_music = music.id_music;
      } else {
        state.data = music;
        state._id_music = _id;
      }
      state.dataRandom = template;
      state.index = index;
    },
    addIdPlaylist: (state, action) => {
      state.id_playlist = action.payload;
    },
  },
});
const { actions, reducer } = musicSlice;
export const musicStore = (state) => state.music;
export const {
  addIndexMusic,
  onNextPrevMusic,
  onRandomMusic,
  onPauseMusic,
  onAudio,
  onDropdownMusic,
  onChooseMusic,
  onPlaylist,
  addIdPlaylist,
} = actions;
export default reducer;
