import React from 'react'
import hero from '../images/hero.svg'
import arrow from '../images/arror.svg'
import './pages.css'

const Home = () => {
    return (
      <main>
        <div className="hero">
          <div className="hero-center">
            <div className="hero-info">
              <h1>Read The New York Times Most Popular Articles</h1>
              <p>
                Now you can read news articles anytime anywhere with News
                <span className='xp'>XP</span>
              </p>
              <button className='btn'><img src={arrow} alt="arrow" className="arrow"/></button>
            </div>
            <div className="hero-images">
                <img src={hero} alt="hero" className="hero-img" />
            </div>
          </div>
        </div>
        <div className="news">
            <div className="news-center">
                <div className="news-info">
                    <h1>Pop</h1>
                </div>
            </div>
        </div>
      </main>
    );
}

export default Home
