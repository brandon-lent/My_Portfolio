import React, { useState, useEffect } from "react";

//Routing
import { Link } from "react-router-dom";

import TrainingBotImage from "../../../assets/MyWorkImages/trainingbot.png";
import GoodTimeJournalImage from "../../../assets/MyWorkImages/goodtimejournal.png";

interface MyWorkProps {}

export const MyWork: React.FC<MyWorkProps> = () => {
  const [loading, setLoading] = useState(true);

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
            {loading && <div className="border loading-image"></div>}

            <img
              width="100%"
              height="100%"
              className={loading ? "" : "border"}
              src={TrainingBotImage}
              alt="A project I worked on called Training Bot"
              onLoad={(e) => setLoading(false)}
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
            <a
              className="linkblock"
              target="blank"
              rel="noopener noreferrer"
              href="https://medium.com/@blent1050"
            >
              <div className="linkImage" />
              View Development Journal
            </a>
          </div>
        </div>

        <div className="work-project">
          <h4 className="bold">Good Time Journal</h4>
          <hr />
          <p className="project-description">
            Based off Stanfords{" "}
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
            {loading && <div className="border loading-image"></div>}

            <img
              width="100%"
              height="100%"
              className={loading ? "" : "border"}
              src={GoodTimeJournalImage}
              alt="A project I worked on called Training Bot"
              onLoad={(e) => setLoading(false)}
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
            <a
              className="linkblock"
              rel="noopener noreferrer"
              href="https://blog.brandon-lent.com/blog/2020/02/reflection-good-time-journal/"
            >
              <div className="linkImage" />
              View Development Journal
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
