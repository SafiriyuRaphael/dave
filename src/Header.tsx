import { NAVITEMS } from "./constants/NavItems";

const Header = () => {
  return (
    <header className="flex justify-between px-3.5 pt-3.5 items-center">
      <h1 className="text-2xl font-bold">My App</h1>
      <nav>
        <ul className="flex space-x-10">
          {NAVITEMS.map((item) => (
            <li className="border-b border-b-white hover:border-b-black">
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
