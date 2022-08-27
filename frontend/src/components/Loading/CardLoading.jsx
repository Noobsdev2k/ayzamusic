import { Skeleton, Space } from "antd";
import React from "react";

export default function CardLoading() {
  return [...Array(16)].map((_, index) => {
    return (
      <div className="song" key={index}>
        <Space style={{ marginRight: "10px" }}>
          <Skeleton.Avatar shape="square" size="large" />
          <Skeleton.Input active size="large" />
        </Space>
        <Skeleton.Input active style={{ marginRight: "10px" }} size="large" />
        <Skeleton.Input active block size="large" />
      </div>
    );
  });
}
