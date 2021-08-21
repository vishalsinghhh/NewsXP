import React, { useRef } from "react";
import NewsList from '../components/NewsList'
import SearchForm from '../components/SearchForm'
import hero from '../images/hero.svg'
import arrow from '../images/arror.svg'
import './pages.css'

const scrollToRef = (ref) => window.scrollTo(0,ref.current.offsetTop)

const Home = () => {

  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

    return (
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
        
        <SearchForm />
        <NewsList />
      </main>
    );
}

export default Home
