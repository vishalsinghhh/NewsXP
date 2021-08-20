import React from "react";
import News from "./News";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const NewsList = () => {
  const { news, loading } = useGlobalContext();
  console.log(news);

  if (loading) {
    return <Loading />;
  }
  if (news.length < 1) {
    return <h2>no news article matched your search criteria</h2>;
  }

  return (
    <section className="section">
    <h2></h2>
      <h2>news list component</h2>
    </section>
  );
};

export default NewsList;
