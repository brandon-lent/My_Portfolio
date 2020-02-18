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
      <section>
        <SearchBar search={search} setSearch={setSearch} />
      </section>
      {writings.map(writing => {
        return (
          <section className="writings">
            <h3>{writing.title}</h3>
            <p>{writing.body}</p>
            <hr />
          </section>
        );
      })}
    </div>
  );
};
