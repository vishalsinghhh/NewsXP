import React from "react";
import { Link } from "react-router-dom";

const News = ({ pic, newsurl, date, newstitle, newsabstract }) => {
  return (
    <article>
      <div>
        <img
          src={pic}
          alt=https://static01.nyt.com/images/2021/08/18/world/18ISRAEL-VIRUS01/18ISRAEL-VIRUS01-mediumThreeByTwo210.jpg"
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
