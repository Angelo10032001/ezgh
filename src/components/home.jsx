import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-[#41bbc5] flex flex-col items-center">
      <header className="w-full bg-white text-white py-4 px-6 flex justify-between">
        <h1 className="text-7xl font-bold text-black">E. Zarate General Hospital</h1>
      </header>
      <main className="flex flex-col items-center">
        <h2 className="text-4xl bg-white font-bold mt-10 text-black">We Treat, God Heals</h2>
        <img src="/hospital.jpg" alt="Hospital" className="w-3/4 mt-4 rounded-lg shadow-lg" />
      </main>
    </div>
  );
}

export default Home;
