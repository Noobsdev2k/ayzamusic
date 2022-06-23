import React from "react";
import { useState } from "react";
import { UseUploadMusic } from "../../hooks/useUpload";

export default function ModalUploadMusic() {
  const {
    handleUploadMusicSource,
    handleUploadMusicImage,
    handlePostUploadMusic,
    loadingUploadMusic,
    statusUploadMusic,
    others,
    newImage,
    newAudio,
  } = UseUploadMusic();

  return (
    <div>
      <form onSubmit={handlePostUploadMusic}>
        <input type="text" placeholder="name" name="name_music" />
        <input type="text" placeholder="single" name="name_singer" />
        <input type="text" placeholder="theloai" name="category" />
        <input type="text" placeholder="link" name="link_mv" />
        <input
          type="file"
          name="src_music"
          onChange={(e) => {
            handleUploadMusicSource(e.target.files[0]);
          }}
        />
        <input
          type="file"
          name="image_music"
          onChange={(e) => {
            handleUploadMusicImage(e.target.files[0]);
          }}
        />
        <input type="submit" value="save" />
      </form>
    </div>
  );
}
