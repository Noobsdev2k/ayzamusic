import React from "react";

import Billboard from "../../components/Billboard";
import Player from "../../components/Player";
import Songs from "../../components/Songs";

export default function Home() {
  return (
    <>
      <Billboard />
      <div className="content">
        <Songs />
        <Player />
      </div>
    </>
  );
}
