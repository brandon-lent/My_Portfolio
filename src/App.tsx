import React, { useState, useEffect } from "react";

// Routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import { Navigation } from "./components/navigation/Navigation";
import { Home } from "./components/pages/home/Home";
import { Contact } from "./components/pages/contact/Contact";
import { MyWork } from "./components/pages/myWork/MyWork";
import { Footer } from "./components/footer/Footer";

// Util
import { customLog } from "./util/customLog";

const App: React.FC = () => {
  const [isLightTheme, setisLightTheme] = useState<boolean>(true);

  // Prevents console from re-running on component re-renders.
  useEffect(() => {
    customLog("👨‍💻 Welcome to my Website 👨‍💻", "orange");
    customLog("I'm open to a variety of opportunities", "orange");
    customLog(
      "Just email me and I'll get back to you as soon as possible",
      "orange"
    );
    customLog("Hello@Brandonlent.com", "orange");
    customLog("Other Profiles:", "orange");
    console.table(socials);
  }, []);

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
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

const socials = [
  {
    website: "LinkedIn",
    URL: "https://www.linkedin.com/in/brandon-lent/",
  },
  {
    website: "Github",
    URL: "https://github.com/Blent1050",
  },
];
