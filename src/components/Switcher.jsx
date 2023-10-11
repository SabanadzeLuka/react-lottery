import React, { useEffect, useState } from "react";

const Switcher = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const toggleTheme = () => {
    if (isChecked) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "Dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "Light");
    }
  };

  

  useEffect(() => {
    toggleTheme();
  }, [isChecked]);

  useEffect(() => {
    handleThemeSwitcher();
  }, [theme]);

  const handleThemeSwitcher = () => {
    switch (theme) {
      case "Dark":
        document.documentElement.classList.add("dark");
        setIsChecked(true);
        break;
      case "Light":
        document.documentElement.classList.remove("dark");
        setIsChecked(false);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="sr-only"
        />
        <span className="label flex items-center text-sm font-medium text-black">
          Change Appearance
        </span>
        <span
          className={`slider mx-4 flex h-6 w-[48px] items-center rounded-full p-1 duration-200 ${
            isChecked ? "bg-[#212b36]" : "bg-[#CCCCCE]"
          }`}
        >
          <span
            className={`dot h-4 w-4 rounded-full bg-white duration-200 ${
              isChecked ? "translate-x-[24px]" : ""
            }`}
          ></span>
        </span>
      </label>
    </>
  );
};

export default Switcher;
