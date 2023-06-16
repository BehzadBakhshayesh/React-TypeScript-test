import React from "react";
import { Spin } from "antd";
import"./loading.scss"

const Loading: React.FC = () => {
  return (
    <div className="loading">
      <Spin tip="Loading..." size="large"/>
    </div>
  );
};

export default Loading;
