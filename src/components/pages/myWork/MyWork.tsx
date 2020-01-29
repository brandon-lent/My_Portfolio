import React from "react";

interface MyWorkProps {}

export const MyWork: React.FC<MyWorkProps> = ({}) => {
  return (
    <article className="my-work">
      <h2>My Work</h2>
      <section className="recent-work">
        <div className="work-project">
          <h3>Training Bot</h3>
        </div>
        <div className="work-project">
          <h3>Good Time Journal</h3>
        </div>
        <div className="work-project">
          <h3>Park Buddy</h3>
        </div>
        <div className="work-project">
          <h3>Lambdagram</h3>
        </div>
      </section>
    </article>
  );
};
