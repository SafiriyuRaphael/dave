const Hero = () => {
  return (
    <main className="pt-10">
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
    </main>
  );
};

export default Hero;
