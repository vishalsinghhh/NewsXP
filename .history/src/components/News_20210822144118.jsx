import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./Components.css";

const News = ({ image, newsurl, date, newstitle, newsabstract }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="section-newslist">
      <header>
        <h3 className="newstitle">{newstitle}</h3>
        <button className="btn-newslist" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && [
        <img src={image} alt="image" className="newslist-img" />,
        <p className="description">Description :</p>,
        <p>{newsabstract}</p>,
        <div className="newslist-underline"></div>,
        <p>Date: {date}</p>,
        <button className="newslist-btn">
          <a href={newsurl} target="_blank">
            Read More
          </a>
        ,
      ]}
    </article>
  );
};

export default News;
