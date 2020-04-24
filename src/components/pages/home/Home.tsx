import React from "react";

// Routing
import { Link } from "react-router-dom";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <div className="homepage">
      <section>
        <h2>My name is Brandon</h2>
        <p>I'm a Software Developer living in Florida 🏝</p>
        <br />
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
        <a href="https://blog.brandon-lent.com" className="linkblock">
          <div className="linkImage" />
          Read my writings
        </a>
        <a href="mailto:Hello@Brandonlent.com" className="linkblock">
          <div className="linkImage" />
          Contact me
        </a>
      </section>
    </div>
  );
};
