import React from "react";
import News from "./News";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const NewsList = () => {
  const { news,pic, loading } = useGlobalContext();
  console.log(pic);
  console.log(news);
  

  if (loading) {
    return <Loading />;
  }
  if (news.length < 1) {
    return <h2>no news article matched your search criteria</h2>;
  }

  return (
    <section className="section">
    <h2 className="section-title">
      News Articles
    </h2>
      <div className="article-center">
        {news.map((item)=>{
          return <News key={item.newsid}{...item}/>
        })}
        {news.map((item)=>{
          return <News key={item.newsid}{...item}/>
        })}
      </div>
    </section>
  );
};

export default NewsList;
