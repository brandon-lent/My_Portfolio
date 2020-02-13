import React from "react";

// Routing
import { Link } from "react-router-dom";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <div className="homepage">
      <section>
        <h2>My name is Brandon</h2>
        <p>I'm a software developer that believes the details matter.</p>
        <p>
          Creating elegant and thoughtful software products fuel my goals of
          continual improvement and client satisfaction.
        </p>
      </section>
      <section className="section-seperator">
        <Link to="/my-work" className="linkblock">
          <div className="linkImage" />
          See my work
        </Link>
        <Link to="/case-studies" className="linkblock">
          <div className="linkImage" />
          Read my case studies
        </Link>
        <Link to="/contact" className="linkblock">
          <div className="linkImage" />
          Contact me
        </Link>
      </section>
    </div>
  );
};
