import React from 'react'
import { useGlobalContext } from "../context";

const SearchForm = () => {
    const {setSearchTerm} = useGlobalContext()
    return (
      <div className="news" ref={myRef}>
        <div className="news-center">
          <div className="news-info">
            <h1 className="news-title">Popular Articles</h1>
            <div className="underline"></div>
            <p>Read both latest and old news articles according to your mood</p>
            <p>Select the time period</p>
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
            <div className="news-cards"></div>
          </div>
        </div>
      </div>
    );
}

export default SearchForm
