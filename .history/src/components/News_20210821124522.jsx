import React, {useState} from "react";
import { Link } from "react-router-dom";
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

const News = ({ image, newsurl, date, newstitle, newsabstract }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <article>
      <header>
        <h4>{newstitle}</h4>
        <button onClick={()=>setShowInfo(!showInfo)}>{}</button>
      </header>
      {showInfo && [
        <img
          src={image}
          alt="image"
        />,
        <p>{newsabstract}</p>,
        <p>Date: {date}</p>,
        <button>
          <a href={newsurl} target="_blank">
            Read More
          </a>
        </button>,
      ]}

      {/* <div>
        <img
          src={image}
          alt="image"
        />
      </div>
      <div>
        <h2>{newstitle}</h2>
      </div>
      <div>
        <p>{newsabstract}</p>
      </div>
      <div>
        <p>Date: {date}</p>
      </div>
      <button>
        <a href={newsurl} target="_blank">
          Read More
        </a>
      </button> */}
    </article>
  );
};

export default News;
