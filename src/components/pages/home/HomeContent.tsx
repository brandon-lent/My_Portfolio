import React from "react";

// Routing
import { Link } from "react-router-dom";

// Right Icon
import Icon from "../../../assets/forward.svg";
import EmailIcon from "../../../assets/email-icon.png";

interface Home_ContentProps {}

export const HomeContent: React.FC<Home_ContentProps> = ({}) => {
  return (
    <>
      <section className="center">
        {/* <Link className="see-how" to="my-work">
          My Work <img src={Icon} alt="Right arrow" />
        </Link> */}
        <a href="mailto:hello@brandonlent.com" className="see-how">
          Email Me <img src={EmailIcon} alt="Right arrow" />
        </a>
      </section>
    </>
  );
};
