import React from "react";

// Lazy Load
import { LazyLoadImage } from "@tjoskar/react-lazyload-img";

import TrainingBotImage from "../../../assets/MyWorkImages/trainingbot.png";
import GoodTimeJournalImage from "../../../assets/MyWorkImages/goodtimejournal.png";
import { Link } from "react-router-dom";

interface MyWorkProps {}

export const MyWork: React.FC<MyWorkProps> = () => {
  return (
    <div className="my-work">
      <h2>My Public Work</h2>
      <section className="recent-work">
        <div className="work-project">
          <h4 className="bold">Training Bot</h4>
          <hr />
          <p className="project-description">
            Training Bot is a web application that helps teams stay in sync with
            optional and required trainings. Our bot will send automated
            notifications to specified team members.
          </p>
          <a
            className="remove-attr"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.trainingbot.co"
          >
            <LazyLoadImage
              width="100%"
              height="100%"
              className="border"
              defaultImage={""}
              image={TrainingBotImage}
              alt="A project I worked on called Training Bot"
            />
          </a>
          <div className="project-links">
            <a
              className="linkblock"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.trainingbot.co"
            >
              <div className="linkImage" />
              View Project
            </a>
            <a
              className="linkblock"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/training-bot"
            >
              <div className="linkImage" />
              View Code
            </a>
            <Link
              className="linkblock"
              rel="noopener noreferrer"
              to="/case-studies/trainingbot"
            >
              <div className="linkImage" />
              Case Study
            </Link>
          </div>
        </div>

        <div className="work-project">
          <h4 className="bold">Good Time Journal</h4>
          <hr />
          <p className="project-description">
            Based off of Stanfords{" "}
            <a href="http://lifedesignlab.stanford.edu/">
              <span className="italic inlineLinkBlock">Design Your Life</span>
            </a>{" "}
            class, Good Time Journal aims to deliver an experience that empowers
            users to improve their lives.{" "}
          </p>
          <a
            className="remove-attr"
            target="_blank"
            rel="noopener noreferrer"
            href="https://goodtimejournal.netlify.com/"
          >
            <LazyLoadImage
              width="100%"
              height="100%"
              className="border"
              defaultImage={""}
              image={GoodTimeJournalImage}
              alt="A project I worked on called Training Bot"
            />
          </a>
          <div className="project-links">
            <a
              className="linkblock"
              target="_blank"
              rel="noopener noreferrer"
              href="https://goodtimejournal.netlify.com/"
            >
              <div className="linkImage" />
              View Project
            </a>
            <a
              className="linkblock"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/GoodTimeJournal"
            >
              <div className="linkImage" />
              View Code
            </a>
            <Link
              className="linkblock"
              rel="noopener noreferrer"
              to="/case-studies/goodtimejournal"
            >
              <div className="linkImage" />
              Case Study
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
