import React, { Component } from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import TopicColumn from "./components/TopicColumn.js";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
          <TopicColumn/>
       <Footer/>
      </div>
    );
  }
}

export default App;
