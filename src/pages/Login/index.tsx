import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { loginSbmit } from "./logingTypes";
import fetchClient from "tools/fetchClient";
import history from "tools/history";
import { isAuth } from "tools/isAuth";
import "./loging.scss";
import { logout } from "tools/logout";
import Loading from "components/Loading";

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = ({ password, username }: loginSbmit) => {
    setLoading(true);
    fetchClient
      .post("api/login", { password, username })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("token", response?.data?.token);
          navigate("/");
          // navigate(
          //   !!history?.location?.pathname ? history?.location?.pathname : "/"
          // );
        }
      })
      .catch(() => {
        logout();
        navigate("/login");
      })
      .finally(() => setLoading(false));
  };
  if (isAuth()) {
    history.back();
    return <Loading />;
  }
  return (
    <div className="login">
      <div>
        <div>emma.wong@reqres.in</div>
        <div>george.bluth@reqres.in</div>
        <div>janet.weaver@reqres.in</div>
        <div>eve.holt@reqres.in</div>
        <div>charles.morris@reqres.in</div>
        <div>tracey.ramos@reqres.in</div>
      </div>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={submitHandler}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            disabled={loading}
            loading={loading}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
