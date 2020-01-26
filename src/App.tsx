import React from "react";

// Routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import { Navigation } from "./components/navigation/Navigation";
import { Home } from "./components/pages/home/Home";
import { Consulting } from "./components/pages/consulting/Consulting";
import { MyWork } from "./components/pages/myWork/MyWork";
import { CaseStudies } from "./components/pages/caseStudies/CaseStudies";
import { About } from "./components/pages/about/About";

const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/consulting">
          <Consulting />
        </Route>
        <Route path="/my-work">
          <MyWork />
        </Route>
        <Route path="/case-studies">
          <CaseStudies />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
