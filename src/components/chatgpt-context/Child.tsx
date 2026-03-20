import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Child = () => {
  const childTheme = useContext(ThemeContext);
  return (
    <div>
      <p>Current theme: {childTheme.theme}</p>
    </div>
  );
};
