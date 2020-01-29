import React from "react";

// Routing
import { Link } from "react-router-dom";

interface Home_ContentProps {}

export const HomeContent: React.FC<Home_ContentProps> = ({}) => {
  return (
    <>
      <section className="center">
        <Link className="see-how" to="my-work">
          See How
        </Link>
      </section>
    </>
  );
};
