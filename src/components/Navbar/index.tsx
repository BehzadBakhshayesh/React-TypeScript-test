import React, { useLayoutEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Switch } from "antd";
import { AppDispatch } from "redux/store";
import { setTheme } from "tools/theme";
import "./navbar.scss";

interface navbarprpsType {
  abc: string;
}

const Navbar: React.FC<navbarprpsType> = ({ abc }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
    dispatch({ type: "USER_LOGOUT" });
  };
  const storageTheme= localStorage.getItem("theme")
  useLayoutEffect(() => {
    setTheme(`${storageTheme}`);
  }, [storageTheme]);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/nothing-here">Nothing Here</Link>
        </li>
        <li>
          <Switch
            checkedChildren="light"
            unCheckedChildren="dark"
            defaultChecked={localStorage.getItem("theme") !== "dark"}
            onChange={(checked) => {
              if (checked) {
                setTheme("light");
                localStorage.setItem("theme", "light");
              } else {
                setTheme("dark");
                localStorage.setItem("theme", "dark");
              }
            }}
          />
        </li>
        <li>
          <span onClick={logoutHandler}>logout</span>
        </li>
      </ul>
      {abc}
    </nav>
  );
};

export default Navbar;
