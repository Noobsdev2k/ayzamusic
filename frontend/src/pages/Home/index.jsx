import React from "react";

import Billboard from "../../components/Billboard";
import Player from "../../components/Player";
import Songs from "../../components/Songs";
import { UseAuthentication } from "../../hooks/useAuth";

export default function Home() {
  const { handlePostLogin, loading } = UseAuthentication();

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
