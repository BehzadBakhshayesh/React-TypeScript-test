import { isAuth } from "tools/isAuth";
import { logout } from "tools/logout";
import { setTheme } from "tools/theme";

describe("isAuth", () => {
  it("shold Be Boolean", () => {
    const isAuthType = typeof isAuth();
    expect(isAuthType).toBe("boolean");
  });
  it("shold not to Be Undefined", () => {
    expect(isAuth()).not.toBeUndefined();
  });
});

describe.skip("logout", () => {
  beforeAll(() => logout());
  it("shold not have token", () => {
    const token = localStorage.getItem("token");
    expect(token).toBeNull();
  });
  it("shold changed route to login", () => {
    const pathname = window.location.pathname;
    expect(pathname).toBe("/login");
  });
});

describe("setTheme", () => {
  it("shold set theme=dark Attribute to html tag", () => {
    setTheme("dark");
    const themeValue = document.documentElement.getAttribute("theme");
    expect(themeValue).toBe("dark");
  });
  it("shold set theme=lightt Attribute to html tag", () => {
    setTheme("light");
    const themeValue = document.documentElement.getAttribute("theme");
    expect(themeValue).toBe("light");
  });
});
