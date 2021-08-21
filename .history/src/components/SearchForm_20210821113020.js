import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const {searchTerm, setSearchTerm } = useGlobalContext();
  return (
    <section className="">
      <div className="days">
        <div
          className="day1"
          onClick={() => setSearchTerm(1)}
          className={`date-btn ${1 === searchTerm} && 'active-btn`}
        >
          <p>1 Day</p>
        </div>
        <div className="day2" onClick={() => setSearchTerm(7)}>
          <p>7 Day</p>
        </div>
        <div className="day3" onClick={() => setSearchTerm(30)}>
          <p>30 Day</p>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;
