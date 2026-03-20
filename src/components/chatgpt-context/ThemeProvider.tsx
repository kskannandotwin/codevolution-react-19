import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { Child } from "./Child";

export const ThemeContextProvider = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Child />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </ThemeContext.Provider>
  );
};
