import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url =
  "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=%207bbzc8D5VjTh4kBn6GwJWc1cRUWxSn06";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("1");
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}`);
      const data  = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchNews()
  },[searchTerm])

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
