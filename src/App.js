import React, { Component } from "react";
import Navbar from "../src/components/Navbar/Navbar";
import TourList from "./components/Tourlist";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <TourList />
      </div>
    );
  }
}

export default App;
