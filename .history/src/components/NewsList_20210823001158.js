import React from "react";
import News from "./News";
import Loading from "./Loading";
import { useGlobalContext } from "../context";
import "./Components.css"

const NewsList = () => {
  const { news, loading } = useGlobalContext();
  

  if (loading) {
    return <Loading />;
  }
  if (news.length < 1) {
    return <h2>no news article matched your search criteria</h2>;
  }

  return (
    <main>
      <div className="container">
        <section className="info">
          {news.map((item) => {
            return <News key={item.newsid} {...item} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default NewsList;
