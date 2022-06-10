import API from "./api";

const uploadMusicApi = {
  getUploadMusic(params) {
    const url = "music/get-upload";
    return API.get(url, { params });
  },
  postUploadMusic(data) {
    const url = "music/create";
    return API.post(url, data);
  },
  editUploadMusic(data) {
    const url = "music/edit";
    return API.put(url, data);
  },
  deleteMusic(params) {
    const url = "music/delete-by-id";
    return API.delete(url, { params });
  },
};

export default uploadMusicApi;
