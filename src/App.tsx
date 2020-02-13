import React, { useState } from "react";

// Routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import { Navigation } from "./components/navigation/Navigation";
import { Home } from "./components/pages/home/Home";
import { Contact } from "./components/pages/contact/Contact";
import { MyWork } from "./components/pages/myWork/MyWork";
import { CaseStudies } from "./components/pages/caseStudies/CaseStudies";
import { About } from "./components/pages/about/About";
import { Footer } from "./components/footer/Footer";

const App: React.FC = () => {
  const [isLightTheme, setisLightTheme] = useState<boolean>(true);

  return (
    <div className={isLightTheme ? "themeWrapper" : "darkTheme themeWrapper"}>
      <Router>
        <Navigation
          isLightTheme={isLightTheme}
          setIsLightTheme={setisLightTheme}
        />
        <div className="base">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Contact">
              <Contact />
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
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
