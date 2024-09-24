import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
    </div>
  );
};

export default App;
