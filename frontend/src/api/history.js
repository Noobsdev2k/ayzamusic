import API from "./api";

const PlayHistoryAPI = {
  postPlayHistory(data) {
    return API.post("play-history/create", data);
  },
  getLayHistory(params) {
    return API.get("play-history/get-by-token", { params });
  },
};
export default PlayHistoryAPI;
