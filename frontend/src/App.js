
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


import Proposal from "@/components/spark/Proposal";

function Home() {
  return (
    <div
      data-testid="spark-home"
      className="relative min-h-screen text-[#F8F9FB]"
      style={{ background: "#090B1A" }}
    >

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
          <Route path="/proposal" element={<Proposal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
