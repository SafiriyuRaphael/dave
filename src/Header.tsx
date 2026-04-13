import type { Dispatch, SetStateAction } from "react";
import { NAVITEMS } from "./constants/NavItems";

type HeaderProp = {
  lightTheme: "light" | "dark";
  toggleTheme: Dispatch<SetStateAction<"light" | "dark">>;
};

const Header = ({ lightTheme, toggleTheme }: HeaderProp) => {
  // lightTheme = false;

  console.log(lightTheme);

  return (
    <header
      className={`flex justify-between px-3.5 py-3.5 items-center ${lightTheme === "light" ? "bg-white text-black" : "bg-black text-white"}`}
    >
      <h1 className="text-2xl font-bold">My App</h1>
      <nav>
        <ul className="flex space-x-10">
          {NAVITEMS.map((item, i) => (
            <li
              className={`border-b ${lightTheme === "light" ? "border-b-white hover:border-b-black" : "border-b-black hover:border-b-white"}`}
              key={item.name}
            >
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className={`${lightTheme === "light" ? "bg-white text-black" : "bg-black text-white"}`}
        onClick={() =>
          toggleTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
      >
        Change theme
      </button>
    </header>
  );
};

export default Header;
