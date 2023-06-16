import React from "react";
import { Layout } from "antd";
import { useLocation } from "react-router-dom";
import Router from "router";
import Navbar from "./components/Navbar";
import Login from "pages/Login";
import { isAuth } from "tools/isAuth";
import "./_asset/styles/app.scss";
import "./_asset/styles/themeVariables.scss";


const { Sider } = Layout;

const App: React.FC = () => {
  let { pathname } = useLocation();

  if (pathname === "/login" || !isAuth()) {
    return <Login />;
  }
  return (
    <div className="App">
      <Layout className="layout-wrapper">
        <Sider className="siderStyle">
          <Navbar abc="abc" />
        </Sider>
        <Layout className="content-wrapper">
          <div className="content">
            <Router />
          </div>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
