import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import Skills from "./Skills";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/portfolio">
            <Header />
            <Portfolio />
            <Footer />
          </Route>
          <Route exact path="/about">
            <Header />
            <About />
            <Footer />
          </Route>
          <Route exact path="/blog">
            {/* <Header /> */}
            <Skills />
            {/* <Footer /> */}
          </Route>
          <Route exact path="/contact">
            <Header />
            <Contact />
            <Footer />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
            <About />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
