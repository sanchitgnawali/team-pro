import { useState } from "react";

const filterList = [
  "all",
  "assigned to me",
  "design",
  "development",
  "sales",
  "marketing",
];

export default function ProjectFilter({ currentFilter, changeFilter }) {
  const handleClick = (f) => {
    changeFilter(f);
  };

  return (
    <div className="project-filter">
      <nav>
        <p>Filter By:</p>
        {filterList.map((filter) => (
          <button
            key={filter}
            onClick={() => handleClick(filter)}
            className={currentFilter === filter ? "active" : ""}
          >
            {filter}
          </button>
        ))}
      </nav>
    </div>
  );
}
