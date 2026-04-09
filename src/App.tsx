import Header from "./Header";
import Hero from "./Hero";

const App = () => {
  let lightMode = false;
  return (
    <div>
      <Header lightTheme={lightMode} />
      <Hero lightMode={lightMode} />
    </div>
  );
};

export default App;
