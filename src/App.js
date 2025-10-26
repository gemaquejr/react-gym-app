import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import Offer from "./Components/Offer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main>
        <Feature />
        <Offer />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
