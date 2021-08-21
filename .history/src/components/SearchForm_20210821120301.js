import React, {useState} from "react";
import { useGlobalContext } from "../context";
import "./Components.css";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const [value, setValue] = useState(7)
  const changeColor1=()=>{
      setValue(1)
      setSearchTerm(1)
  }
  const changeColor7=()=>{
      setValue(7)
      setSearchTerm(7)
  }
  const changeColor30=()=>{
      setValue(1)
      setSearchTerm(1)
  }
  return (
    <section className="">
      <div className="days">
        <div
          onClick={changeColor1}
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
