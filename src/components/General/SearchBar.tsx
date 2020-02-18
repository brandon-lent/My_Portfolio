import React from "react";

interface SearchBarProps {
  search: string;
  setSearch: Function;
}

export const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => {
  return (
    <section className="searchBarContainer">
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="searchBar"
        placeholder="Search my articles"
      />
    </section>
  );
};
