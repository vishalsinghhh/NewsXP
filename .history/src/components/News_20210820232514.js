import React from 'react'
import { Link } from "react-router-dom";

const News = ({ image, newsurl, date, newstitle, newsabstract }) => {
  return (
    <article>
      <div>
          <img src={image} alt="image" />
      </div>
      <div>
          <h2></h2>
      </div>
    </article>
  );
};

export default News