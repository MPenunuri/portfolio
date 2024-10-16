import { useState } from "react";
import icon from "../../../assets/brightness-and-contrast.png";
import styles from "./ThemeButton.module.scss";

export default function ThemeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);

    if (isDarkMode) {
      document.documentElement.style.setProperty(
        "--primary-text-color",
        "black"
      );
      document.documentElement.style.setProperty(
        "--secondary-text-color",
        "white"
      );
      document.documentElement.style.setProperty(
        "--primary-background-color",
        "white"
      );
      document.documentElement.style.setProperty(
        "--secondary-background-color",
        "black"
      );
    } else {
      document.documentElement.style.setProperty(
        "--primary-text-color",
        "white"
      );
      document.documentElement.style.setProperty(
        "--secondary-text-color",
        "black"
      );
      document.documentElement.style.setProperty(
        "--primary-background-color",
        "black"
      );
      document.documentElement.style.setProperty(
        "--secondary-background-color",
        "white"
      );
    }
  };
  return (
    <button
      type="button"
      aria-label="Change theme"
      className={styles.button}
      onClick={toggleTheme}
    >
      <span>Change theme</span>
      <img src={icon} alt="dark light icon" />
    </button>
  );
}
