import axios from "axios";
import { message } from "antd";
import { logout } from "./logout";

const fetchClient = axios.create({
  baseURL: "https://reqres.in/",
  headers: { "X-Custom-Header": "foobar" },
});

export default fetchClient;

const request = (config: any): any => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
};
const sccessResponse = (response: any) => {
  return response;
};

const errorResponse = (error: any) => {
  if (
    !error?.response?.config?.headers?.Authorization ||
    error?.response?.status === 401
  ) {
    logout();
  }
  const errorMessage = error?.response?.data?.error;
  message.error(errorMessage ?? "Login failed, try again later");
  return Promise.reject(error);
};

fetchClient.interceptors.request.use(request);

fetchClient.interceptors.response.use(sccessResponse, errorResponse);
