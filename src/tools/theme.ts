export const setTheme = (theme: string) => {
    const htmlTag = document.documentElement;
    htmlTag.setAttribute("theme", theme);
  };