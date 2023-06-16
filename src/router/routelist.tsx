import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
// const Login = lazy(() => import("../pages/Login"));
const NotFond = lazy(() => import("../pages/NotFond"));

export const routelist = [
  { id: 1, path: "/", element: Home },
  { id: 2, path: "/about", element: About },
  // { id: 2, path: "/login", element: Login },
  { id: 3, path: "*", element: NotFond },
];
