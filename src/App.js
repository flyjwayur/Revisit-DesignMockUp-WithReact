import React, { Component } from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Main from "./components/Main.js";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
          <Main/>
       <Footer/>
      </div>
    );
  }
}

export default App;
