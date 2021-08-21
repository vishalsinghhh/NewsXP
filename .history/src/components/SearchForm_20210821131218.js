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
      setValue(30)
      setSearchTerm(30)
  }
  return (
    <section className="">
      <div className="days">
        <div
          onClick={changeColor1}
          className={`day1 ${value === 1 && "active-btn"}`}
        >
          <p>1 Day</p>
          <div
            className={`underline-day ${value === 1 && "active-underline-day"}`}
          ></div>
        </div>
        <div
          onClick={changeColor7}
          className={`underline-day ${value === 7 && "active-underline-day"}`}
        >
          <p>7 Day</p>
          <div className="underline-day"></div>
        </div>
        <div
          onClick={changeColor30}
          className={`day3 ${value === 30 && "active-btn"}`}
        >
          <p>30 Day</p>
          <div className="underline-day"></div>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;
