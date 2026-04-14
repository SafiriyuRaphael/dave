import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Header from "./Header";
import Hero from "./Hero";

// ⚖️ React Laws (Quick Reference Table)
// 🧩 Law	📖 What It Means	❌ What Breaks It	✅ Correct Way
// Pure Components	Same input → same output	Changing variables outside component	Keep logic inside component
// No State Mutation	Don’t modify state directly	state.count++	setCount(count + 1)
// State is Async	Updates don’t happen instantly	Logging state right after set	Use updater: setCount(prev => prev + 1)
// Props are Read-only	Cannot modify props	props.name = "x"	Pass new props from parent
// Hooks Rules	Hooks must be predictable	Using hooks in if or loops	Always call at top level //
// One-way Data Flow	Parent → Child only	Child modifying parent data directly	Use callbacks (props.onClick)
// Stable Keys	Keys must not change	Using index as key	Use unique IDs
// 🧠 Hooks Rules Table (Separate but Important)
// ⚙️ Rule	❌ Wrong	✅ Correct
// Top Level Only	Inside if, loops	Always at top
// Only in React Functions	Normal JS function	Component or custom hook
// Must start with use	myHook()	useMyHook()

// state managements
// useState
// useRef
// useEffect
// useMemo
// useCallback
// useOptimistic
// useContext
// useLayoutEffect

// useState is a React hook that lets your component remember values and update the UI when they change.

// useRef = a way to keep a value WITHOUT re-rendering the screen

// Without it → React components forget everything after rendering.
// With it → your UI becomes interactive.

// let lightMode = true; avoid

const App = () => {
  // let lightMode = false;

  // let toggleTheme = () => {
  //   lightMode = !lightMode;
  // };

  // Use Memo this for:
  // focusing input
  // setting value quickly
  // scrolling
  // playing video

  const [theme, setTheme] = useState<"light" | "dark">("light");

  const [width, setWidth] = useState(innerWidth);

  const countRef = useRef(0);

  const inputRef = useRef<HTMLInputElement | null>(null);

  let counter = 0;

  // setInterval(() => {
  //   counter++;
  //   console.log(counter);
  // }, 1000);

  // useEffect(() => {
  //   console.log("runs once page mounts");
  // }, [])

  // useMemo
  // Caches a computed value to avoid recalculating

  let users = ["david", "tolu", "and", "co"];

  useEffect(() => {
    console.log("runs once page mounts");
  }, [theme]);

  useEffect(() => {
    const resizeFuntion = () => {
      setWidth(innerWidth);
      console.log("page resized");
    };

    addEventListener("resize", () => {
      resizeFuntion();
    });

    return () => {
      removeEventListener("resize", () => {
        resizeFuntion();
      });
    };
  }, [width]);

  useMemo(() => {}, []);

  console.log(width);

  const usersWithName = users.filter((user) => {
    return user.length > 3;
  });

  const cachedUsers = useMemo(() => {
    const filtered = users.filter((user) => user.length > 3);
    return filtered;
  }, [theme]);

  console.log(usersWithName);
  console.log(cachedUsers);

  let logFriends = useCallback(() => {
    console.log("friend");
  }, []);

  logFriends();
  return (
    <div>
      <Header lightTheme={theme} toggleTheme={setTheme} />
      <Hero lightMode={theme} countRef={countRef} inputRef={inputRef} />
    </div>
  );
};

export default App;
