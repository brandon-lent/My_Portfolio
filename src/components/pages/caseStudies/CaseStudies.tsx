import React, { useState } from "react";

// Components
import { SearchBar } from "../../General/SearchBar";
// import { Tag } from "../../General/Tag";
// Writings JSON file
import { writings } from "./writings/writings";

interface CaseStudiesProps {}

export const CaseStudies: React.FC<CaseStudiesProps> = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="caseStudies">
      <h2>Writing</h2>
      <p>
        Hello, this is a work in progress. All future articles I publish will be
        on this page. To view my past articles, go{" "}
        <a
          className="italic"
          target="blank"
          href="https://medium.com/@blent1050"
        >
          here
        </a>
      </p>
      {/* <section>
        <SearchBar search={search} setSearch={setSearch} />
      </section> */}
      {/* {writings.map(writing => {
        return (
          <section className="writings">
            <h3>{writing.title}</h3>
            <p>{writing.body}</p>
            <hr />
          </section>
        );
      })} */}
    </div>
  );
};
