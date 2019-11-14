import React from "react";
import "./components/reset.css";
import Map from "./components/Map";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LeaderBoard from "./components/LeaderBoard";
import Contact from "./components/Contact";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/" component={Map} />
        <Route path="/leaderboard" component={LeaderBoard} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
