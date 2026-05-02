import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "@/components/spark/Navbar";
import Hero from "@/components/spark/Hero";
import About from "@/components/spark/About";
import Capabilities from "@/components/spark/Capabilities";
import Sectors from "@/components/spark/Sectors";
import Partners from "@/components/spark/Partners";
import CtaFooter from "@/components/spark/CtaFooter";
import TubeCursor from "@/components/spark/TubeCursor";

function Home() {
  return (
    <div
      data-testid="spark-home"
      className="relative min-h-screen text-[#F8F9FB]"
      style={{ background: "#090B1A" }}
    >
      <TubeCursor
        initialColors={["#2F347D", "#27306B", "#A92A2E", "#C63A3A"]}
        lightColors={["#C63A3A", "#A92A2E", "#2F347D", "#F8F9FB"]}
        lightIntensity={220}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Sectors />
        <Partners />
        <CtaFooter />
      </main>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
