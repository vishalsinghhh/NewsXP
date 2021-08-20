import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

// const url =
//   "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=%207bbzc8D5VjTh4kBn6GwJWc1cRUWxSn06";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("1");
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/${searchTerm}.json?api-key=%207bbzc8D5VjTh4kBn6GwJWc1cRUWxSn06`
      );
      const data = await response.json();
      const { results } = data;
      if (results) {
        const newResults = results.map((item) => {
          const { url, published_date, title, abstract,} = item;
          return {
            newsurl: url,
            date: published_date,
            newstitle: title,
            newsabstract: abstract,
            image: media,
          };
        })
        setNews(newResults)
      } else {
        setNews([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchNews();
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        loading,
        news,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

thing.groups.map((group) =>
  Object.keys(group.price).map((priceOpt) =>
    console.log(priceOpt, group.price[priceOpt])
  )
);