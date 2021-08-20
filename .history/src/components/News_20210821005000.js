import React from "react";
import { Link } from "react-router-dom";

const News = ({ image, newsurl, date, newstitle, newsabstract }) => {
  return (
    <article>
      <div>
        <img
          src={image}
        //   alt="image"
        alt={image}
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
      </button>
    </article>
  );
};

export default News;
