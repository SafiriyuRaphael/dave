import type { RefObject } from "react";

const Hero = ({
  lightMode,
  countRef,
  inputRef,
}: {
  lightMode: "light" | "dark";
  countRef: RefObject<number>;
  inputRef: RefObject<HTMLInputElement | null>;
}) => {
  // lightMode = true  // avoid
  return (
    <main
      className={` px-3.5 h-[93vh] pt-16 ${lightMode === "light" ? "bg-gray-100 text-black" : "bg-gray-800 text-white"}`}
    >
      <section className="hero">
        <h2 className="text-4xl font-bold">Welcome to My App</h2>
        <p className="text-lg mt-4">This is a simple hero section.</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc list-inside mt-2">
          <li>Feature 1: Description of feature 1.</li>
          <li>Feature 2: Description of feature 2.</li>
          <li>Feature 3: Description of feature 3.</li>
        </ul>
      </section>

      <section className="flex gap-3">
        <button
          onClick={() => {
            countRef.current -= 1;
          }}
        >
          Prev -
        </button>
        {/* changes but does not rerender */}
        <p>{countRef.current}</p>
        <button
          onClick={() => {
            countRef.current += 1;
          }}
        >
          Next +
        </button>
      </section>

      <section className="flex flex-col gap-3 items-start">
        <input
          type="text"
          ref={inputRef}
          className={`border rounded-md ${lightMode === "light" ? "border-black" : "border-white"} `}
        />

        <button
          onClick={() => inputRef.current?.focus()}
          className="cursor-pointer"
        >
          focus on Input
        </button>
      </section>
    </main>
  );
};

export default Hero;
