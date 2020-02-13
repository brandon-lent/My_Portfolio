import React from "react";

interface Home_ContentProps {}

export const AboutContent: React.FC<Home_ContentProps> = () => {
  return (
    <>
      <section className="center">
        <a href="mailto:hello@brandonlent.com" className="see-how">
          Email Me
        </a>
      </section>
    </>
  );
};
