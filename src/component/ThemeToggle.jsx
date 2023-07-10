import { FiSun, FiMoon } from "react-icons/fi";
import useApp from "../context/useApp";

const ThemeToggle = () => {
  const { theme, setTheme } = useApp();

  return (
    <div className="p-2">
      {theme === "dark" ? (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <FiSun size={25} className="text-white " />
        </button>
      ) : (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <FiMoon  size={25} className=" text-black" />
        </button>
      )}
    </div>
  );
};

export default ThemeToggle;
