import React from "react";
import "./components/reset.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
