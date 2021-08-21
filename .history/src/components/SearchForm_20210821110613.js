import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('');
  return (
    <section className="">
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
    </section>
  );
};

export default SearchForm;
