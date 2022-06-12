import React from "react";
import { Button, Form, Input } from "antd";
import Billboard from "../../components/Billboard";
import Player from "../../components/Player";
import Songs from "../../components/Songs";
import { UseAccount } from "../../hooks/useAuth";

export default function Home() {
  const { handlePostLogin, loading } = UseAccount();

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
