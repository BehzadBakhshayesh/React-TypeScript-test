import history from "./history";

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.clear()
  history.push("/login");
};
