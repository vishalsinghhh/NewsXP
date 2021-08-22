import React, { useRef } from "react";
import NewsList from "../components/NewsList";
import SearchForm from "../components/SearchForm";
import hero from "../images/hero.svg";
import arrow from "../images/arror.svg";
import "./pages.css";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Home = () => {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  return (
    lo
    <main>
      <div className="hero">
        <div className="hero-center">
          <div className="hero-info">
            <h1>Read The New York Times Most Popular Articles</h1>
            <p>
              Now you can read news articles anytime anywhere with News
              <span className="xp">XP</span>
            </p>
            <button className="btn" onClick={executeScroll}>
              <img src={arrow} alt="arrow" className="arrow" />
            </button>
          </div>
          <div className="hero-images">
            <img src={hero} alt="hero" className="hero-img" />
          </div>
        </div>
      </div>
      <div className="news" ref={myRef}>
        <div className="news-center">
          <div className="news-info">
            <h1 className="news-title">Popular Articles</h1>
            <div className="underline"></div>
            <p>Read both latest and old news articles according to your mood</p>
            <p className="time-period">Select the time period</p>
          </div>
        </div>
      </div>
      <SearchForm />
      <NewsList />
    </main>
  );
};

export default Home;
