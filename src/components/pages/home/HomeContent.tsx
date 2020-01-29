import React from "react";

// Routing
import { Link } from "react-router-dom";

// Right Icon
import Icon from "../../../assets/forward.svg";

interface Home_ContentProps {}

export const HomeContent: React.FC<Home_ContentProps> = ({}) => {
  return (
    <>
      <section className="center">
        <Link className="see-how" to="my-work">
          My Work <img src={Icon} alt="Right arrow" />
        </Link>
      </section>
    </>
  );
};
