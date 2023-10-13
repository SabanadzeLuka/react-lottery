import React, { useEffect, useState } from "react";

const Switcher = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "System");

  const handleCheckboxChange = () => {
    setIsChecked((prevIsChecked) => {
      if (prevIsChecked) {
        setTheme("Light");
      } else {
        setTheme("Dark");
      }
      return !prevIsChecked;
    });
  };

  const onWindowMatch = () => {
    if (
      localStorage.theme === "Dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "Dark");
      setIsChecked(true);
      setTheme("Dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "Light");
      setIsChecked(false);
      setTheme("Light");
    }
  };

  useEffect(() => {
    switch (theme) {
      case "Dark":
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "Dark");
        setIsChecked(true);
        break;
      case "Light":
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "Light");
        setIsChecked(false);
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  return (
    <>
      <div className="absolute top-2 right-0">
        <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <span
            className={`label flex items-center text-sm  text-black ${
              isChecked ? "text-zinc-50" : ""
            }`}
          >
            Change Appearance
          </span>
          <span
            className={`slider mx-4 flex h-5 w-[38px] items-center rounded-full p-1 duration-200 ${
              isChecked ? "bg-zinc-50" : "bg-zinc-950"
            }`}
          >
            <span
              className={`dot h-3 w-3 rounded-full bg-zinc-50 duration-200 ${
                isChecked ? "translate-x-[20px] bg-zinc-950" : ""
              }`}
            ></span>
          </span>
        </label>
      </div>
    </>
  );
};

export default Switcher;
