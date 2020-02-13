import React from "react";

import TrainingBotImage from "../../../assets/MyWorkImages/trainingbot.png";
import GoodTimeJournalImage from "../../../assets/MyWorkImages/goodtimejournal.png";

interface MyWorkProps {}

export const MyWork: React.FC<MyWorkProps> = () => {
  return (
    <div className="my-work">
      <h2>My Public Work</h2>
      <section className="recent-work">
        <div className="work-project">
          <h4>
            Training Bot
            <div>
              <a
                className="hover-border"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.trainingbot.co"
              >
                View Project
              </a>
              <a
                className="hover-border"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/training-bot"
              >
                View Code
              </a>
            </div>
          </h4>
          <a
            className="remove-attr"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.trainingbot.co"
          >
            <img
              className="border"
              src={TrainingBotImage}
              alt="A project I worked on called Training Bot"
            />
          </a>
        </div>
        <div className="work-project">
          <h4>
            Good Time Journal
            <div>
              <a
                className="hover-border"
                target="_blank"
                rel="noopener noreferrer"
                href="https://goodtimejournal.netlify.com/"
              >
                View Project
              </a>
              <a
                className="hover-border"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/GoodTimeJournal"
              >
                View Code
              </a>
            </div>
          </h4>
          <a
            className="remove-attr"
            target="_blank"
            rel="noopener noreferrer"
            href="https://goodtimejournal.netlify.com/"
          >
            <img
              className="border"
              src={GoodTimeJournalImage}
              alt="A project I worked on called Good time journal"
            />
          </a>
        </div>
      </section>
    </div>
  );
};
