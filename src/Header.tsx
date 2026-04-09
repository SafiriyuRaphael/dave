import { NAVITEMS } from "./constants/NavItems";

const Header = ({ lightTheme }: { lightTheme: boolean }) => {
  return (
    <header
      className={`flex justify-between px-3.5 py-3.5 items-center ${lightTheme ? "bg-white text-black" : "bg-black text-white"}`}
    >
      <h1 className="text-2xl font-bold">My App</h1>
      <nav>
        <ul className="flex space-x-10">
          {NAVITEMS.map((item) => (
            <li
              className={`border-b ${lightTheme ? "border-b-white hover:border-b-black" : "border-b-black hover:border-b-white"}`}
            >
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <button>Click me</button>
    </header>
  );
};

export default Header;
