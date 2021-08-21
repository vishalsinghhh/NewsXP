import React from "react";
import News from "./News";
import Loading from "./Loading";
import { useGlobalContext } from "../context";
import "./Components.css"

const NewsList = () => {
  const { news, loading } = useGlobalContext();
  // console.log(pic);
  console.log(news);
  

  if (loading) {
    return <Loading />;
  }
  if (news.length < 1) {
    return <h2>no news article matched your search criteria</h2>;
  }

  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
    <section className="container">
      <div className="info">
        {news.map((item) => {
          return <News key={item.newsid} {...item} />;
        })}
      </div>
    </section>
  );
};

export default NewsList;
