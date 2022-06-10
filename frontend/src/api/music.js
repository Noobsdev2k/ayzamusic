import API from "./api";

const musicAPI = {
  getMusic(params) {
    const url = "music/get-by-id";
    return API.get(url, { params });
  },
  getNewMusic(params) {
    const url = "music/get-all";
    return API.get(url, { params });
  },
  getSearch(params) {
    const url = "search";
    return API.get(url, { params });
  },
  getTrending(params) {
    const url = "music/trending";
    return API.get(url, { params });
  },
};
export default musicAPI;
