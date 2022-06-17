import React from "react";
import { UserNewSongs } from "../../hooks/useNewSongs";
import CardLoading from "../Loading/CardLoading";
import CardSongs from "./CardSongs";

export default function Songs() {
  const { data, loading } = UserNewSongs();
  return (
    <div className="content-item">
      <div className="block-box">
        <h2 className="heading">Most popular</h2>
        <span className="count">92 Songs</span>
      </div>

      <div className="song-list">
        {loading ? (
          <CardLoading />
        ) : (
          data.map((item) => {
            return <CardSongs {...item} key={item._id} />;
          })
        )}
      </div>
    </div>
  );
}
