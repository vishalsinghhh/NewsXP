import React from "react";
import News from "./News";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const NewsList = () => {
  const {news, loading} = useGlobalContext();

  if(loading){
    return <Loading
  }

  return (
    <div>
      <h2>news list component</h2>
    </div>
  );
};

export default NewsList;
