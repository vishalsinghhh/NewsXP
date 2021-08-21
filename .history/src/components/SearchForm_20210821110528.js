import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const se
  return (
    <div>
      <div className="days">
        <div className="day1">
          <p>1 Day</p>
        </div>
        <div className="day2">
          <p>7 Day</p>
        </div>
        <div className="day3">
          <p>30 Day</p>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
