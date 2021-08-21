import React, {useState} from "react";
import { useGlobalContext } from "../context";
import "./Components.css";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const [value, setValue] = useState(1)
  const changeColor=()=>{
      
  }
  return (
    <section className="">
      <div className="days">
        <div
          onClick={changeColor}
          className={`day1 ${value === 1 && "active-btn"}`}
          //   onClick={() => setValue(1)}
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
