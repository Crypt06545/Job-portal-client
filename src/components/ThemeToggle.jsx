import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button
        onClick={toggleTheme}
        className={`flex items-center justify-center w-12 h-12 transition-all duration-300`}
      >
        {theme === "light" ? (
          <FaMoon className="text-blue-300 text-2xl transform transition-transform duration-500 rotate-0 scale-110" />
        ) : (
          <LuSun className="text-yellow-500 text-2xl transform transition-transform duration-500 rotate-45 scale-110" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
