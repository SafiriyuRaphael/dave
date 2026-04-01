import { NAVITEMS } from "./constants/NavItems";
import Header from "./Header";
import Hero from "./Hero";

const App = () => {
  let lightMode = true;
  return (
    <div>
      <Header NAVITEMS={NAVITEMS} />
      <Hero />
    </div>
  );
};

export default App;
