import React from 'react'
import { Link } from "react-router-dom";

const News = ({ image, newsurl, date, newstitle, newsabstract }) => {
  return (
    <article>
      <div>
          <img src={image} alt="image" />
      </div>
      
    </article>
  );
};

export default News
