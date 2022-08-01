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
        <span className="count">{data.length} Songs</span>
      </div>

      <div className="song-list">
        {loading ? (
          <CardLoading />
        ) : (
          data.map((item, index) => {
            return (
              <CardSongs
                key={item._id}
                timeFormat={item.time_format}
                item={item}
                nameMusic={item.name_music}
                category={item.category}
                image={item.image_music}
                nameSinger={item.name_singer}
                _id={item._id}
                src_music={item.src_music}
                data={data}
                index={index}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
